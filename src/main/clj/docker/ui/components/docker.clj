(ns docker.ui.components.docker 
  (:require
   [clojure.java.io :as io]
   [clojure.string :as string ]
   [org.httpkit.client :as http]
   [http.async.client :as client] 
   [http.async.client.request :as request] 
   [docker.ui.components.failure :as f]
   [environ.core :refer [env] :as environ]
   [clojure.tools.logging :as log]
   [clojure.core.async :as async]
   [cheshire.core :as json ] ))

(def ^:private client (client/create-client))
(def ^:private docker-tcp-address (environ/env :docker-tcp-address))

;docker statsの結果、container-idがキー
(def ^:private docker-stats (atom {}))
(def ^:private stats-processing (atom {}))

;pubsub用のexchange
(def ^:private exchange-chan (async/chan))
(def ^:private exchange (async/pub exchange-chan #(:topic %)))

(defn- named-id
  [container]
  (apply str (rest (first (:Names container)))))

(defn- handle-get
  [response]
  (let [{:keys [status error body]} @response] 
    (cond
     (some? error)  
     (do
      (log/error "Failed  exception = %s" error)
      (f/fail "external system connection errorr"))
     (== 200 status) body
     :else  
     (do
      (log/error "Failed, status = %s, body = %s" status body)
      (f/fail (format "external system status error [%s]" status)) ))))

(defn- handle-post
  [response]
  (let [{:keys [status error body]} @response]
    (cond
     (some? error)  
     (do
      (log/error "Failed  exception = %s" error)
      (f/fail "external system connection errorr"))
     (== 204 status) nil 
     :else  
     (do
      (log/error "Failed, status = %s, body = %s" status body)
      (f/fail (format "external system status error [%s] [%s]" status body)) ))))

(defn- ps
  "全コンテナ取得"
  []
  (let [url (format "http://%s/containers/json?all=1" docker-tcp-address) ]
    (log/info url)
    (f/attempt-all
     [response (http/get url{:as :text :timeout 2000}) 
      body (handle-get response)] 
     (json/parse-string body true))))

(defn- nvl [v default]
   (if (nil? v) default v))

(defn- with-cpu-stats
  [id edn]
  (let [cpu-previous (nvl (some->> (:precpu_stats edn) (:cpu_usage) (:total_usage)) 0 )
        cpu-system-previous (nvl (some->> (:precpu_stats edn) (:system_cpu_usage)) 0) 
        cpu-current (->> (:cpu_stats edn) (:cpu_usage) (:total_usage))
        cpu-system-current (->> (:cpu_stats edn) (:system_cpu_usage) )
        cpu-delta (- cpu-current cpu-previous)
        cpu-system-delta (- cpu-system-current cpu-system-previous)
        cpu-count (count (->> (:cpu_stats edn) (:cpu_usage) (:percpu_usage)))
        cpu-percent (if (and (< 0 cpu-delta) (< 0 cpu-system-delta))  
                      (* 100 (* cpu-count (float (/ cpu-delta cpu-system-delta))))
                      0.0 )]
     {:percent cpu-percent }))

(defn- with-memory-stats
  [id edn]
  (let [usage (->> (:memory_stats edn) (:usage))
        limit (->> (:memory_stats edn ) (:limit))]
   {:percent (* 100 (float (/ usage limit)))
    :usage usage 
    :limit limit} ))

(defn- with-block-io-stats
  [id edn]
  (let [read-io (->> (:blkio_stats edn) 
                     (:io_service_bytes_recursive)
                     (filter #(= (:op %) "Read"))
                     (map #(:value %))
                     (reduce +))
        write-io (->> (:blkio_stats edn ) 
                      (:io_service_bytes_recursive)
                      (filter #(= (:op %) "Write"))
                      (map #(:value %))
                      (reduce +))]
    {:read-io read-io 
     :write-io write-io}))

(defn- with-network-stats
  [id edn]
  (let [rx-bytes (->> (:networks edn) (vals) (map #(:rx_bytes %)) (reduce +) )
        tx-bytes (->> (:networks edn) (vals) (map #(:tx_bytes %)) (reduce +))]
   {:rx-bytes rx-bytes 
    :tx-bytes tx-bytes }))

(defn- stats
  "統計の取得"
  [container] 
  (let [id (named-id container) 
        url (format "http://%s/containers/%s/stats" docker-tcp-address id)
        prepared (request/prepare-request :get url :timeout 2000)]
    (log/info "get stats" url)
    ;live-stream
    (request/execute-request 
     client
     prepared
     :headers (fn [status e] (log/info "header" e))
     :status (fn [status e] (log/info "status" e))
     :error (fn [status e] 
              ;timeout = stopped container
              (if (instance? java.util.concurrent.TimeoutException e)
                (do (log/info "container " id " stop")
                    (swap! docker-stats assoc id 
                           {:name id 
                            :id  (:Id container)
                            :down true
                            :memory  {:percent 0 :usage 0 :limit 0}
                            :network  {:rx-bytes 0 :tx-bytes 0} 
                            :block-io  {:read-io 0 :write-io 0} 
                            :cpu  {:percent 0}})
                    (swap! stats-processing dissoc id))
                (do (log/info "container " id " removed") 
                    (swap! docker-stats dissoc id)
                    (swap! stats-processing dissoc id))))
     :part  (fn [status body]
              (let [edn (json/parse-string (String. (.toByteArray body)) true)] 
                (swap! docker-stats assoc id 
                       {:name id 
                        :id (:Id container)
                        :down false
                        :memory (with-memory-stats id edn)
                        :network (with-network-stats id edn)
                        :block-io (with-block-io-stats id edn)
                        :cpu (with-cpu-stats id edn)} ))
              [body :continue] ))))

(defn- summary
  "合計の取得"
  [details]
  (when-not (empty? details) 
    {:memory {:usage (->> (map #(:usage (:memory %)) details) (reduce +)) }
     :cpu {:percent (->> (map #(:percent (:cpu %)) details) (reduce +)) }
     :network {:rx-bytes (->> (map #(:rx-bytes (:network %)) details) (reduce +)) 
               :tx-bytes (->> (map #(:tx-bytes (:network %)) details) (reduce +)) }
     :block-io {:read-io (->> (map #(:read-io (:block-io %)) details) (reduce +)) 
                :write-io (->> (map #(:write-io (:block-io %)) details) (reduce +)) }}))

(defn stats-all 
  "利用可能な全コンテナのdocker-statsを実行する"
  []
  (let [containers (ps)
        id-list (set (map named-id containers))]
    ;存在しないstatsは削除
    (doseq [id-in-stats (keys @docker-stats)]
      (when-not (.contains id-list id-in-stats)
        (do (swap! docker-stats dissoc id-in-stats)
            (log/info "container " id-in-stats " removed"))))
    (->> 
     (filter #(not (contains? @stats-processing (named-id %))) containers )
     (map  
      (fn [container] 
        (let [id (named-id container)]
          ;stats処理中にする
          (swap! stats-processing assoc id true)
          (stats container))))(doall)) ))

(defn publish-stats
  "statsの結果をpublishする"
  []
  (as-> 
    (sort-by :down (vals @docker-stats)) response
    {:summary (summary response) :detail response}
    (async/go (async/>! exchange-chan {:topic :docker-stats :data response}))))

(defn subscribe-stats
  "statsの結果をsubscribeする"
  [subscriber]
  (async/sub exchange :docker-stats subscriber))

(defn unsubscribe-stats
  "statsの結果をunsubscribeする"
  [subscriber]
  (async/unsub exchange :docker-stats subscriber))

(defn container
  "コンテナの情報取得"
  [id]
  (let [url (format "http://%s/containers/%s/json" docker-tcp-address id) ]
    (log/infof url)
    (f/attempt-all
     [response (http/get url {:as :text :timeout 2000}) 
      body (handle-get response)] 
     ;ednだとcljs側で数字始まりがparse-errorになるため
     (json/parse-string body))))

(defn start
  "コンテナ起動"
  [id]
  (let [url (format "http://%s/containers/%s/start" docker-tcp-address id) ]
    (log/infof url)
    (f/attempt-all
     [response (http/post url {:timeout 2000})]
     (handle-post response))))

(defn stop
  "コンテナ停止"
  [id]
  (let [url (format "http://%s/containers/%s/stop" docker-tcp-address id) ]
    (log/infof url)
    (f/attempt-all
     [response (http/post url {:timeout 2000})]
     (handle-post response))))
