(ns docker.ui.components.docker 
  (:require
   [clojure.java.io :as io]
   [clojure.string :as string ]
   [org.httpkit.client :as http] 
   [docker.ui.components.failure :as f]
   [environ.core :refer [env] :as environ]
   [clojure.tools.logging :as log]
   [cheshire.core :as json ]))

(def docker-tcp-address (environ/env :docker-tcp-address))

;docker statsの結果、container-idがキー
(def docker-stats 
  (atom {}))

(defn- async-request 
  "up状態のコンテナを取得する"
  [url opt ]
  (log/infof url)
  (http/get url (merge opt {:timeout 2000})) )

(defn- handle-response
  "レスポンスをハンドリングする"
  [response]
  (let [{:keys [status error body]} @response]
    (log/info status)
    (cond
     (some? error)  
     (do
      (log/error "Failed  exception = %s" error)
      (f/fail "external system connection errorr"))
     (== 200 status) (do (log/info "success") body) 
     :else  
     (do
      (log/error "Failed, status = %s, body = %s" status body)
      (f/fail "external system status error") ))))

(defn ps
  "全コンテナ取得"
  []
  (let [url (format "http://%s/containers/json?all=1" docker-tcp-address) ]
    (log/infof url)
    (f/attempt-all
     [response (async-request url {:as :text} )
      body (handle-response response)] 
     (json/parse-string body true))))
 
(defn- readLine 
  [rdr consumer]
  (let [temp (.readLine rdr)] 
    (when (not (nil? temp))
      (do 
       (consumer temp)
       (recur rdr consumer)))))

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
     {:percent(format "%.2f%%" cpu-percent) }))

(defn- with-memory-stats
  [id edn]
  (let [usage (->> (:memory_stats edn) (:usage))
        limit (->> (:memory_stats edn ) (:limit))]
   {:percent (format "%.2f%%" (* 100 (float (/ usage limit)))) 
    :usage (format "%dMB" (-> (/ usage 1024) (/ 1024) (int)))
    :limit (format "%.2fGB" (-> (/ limit 1024) (/ 1024) (/ 1024) (float)))} ))

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
    {:read-io (format "%dKB" (-> (/ read-io 1024) (int)))
     :write-io (format "%dKB" (-> (/ write-io 1024) (int)))}))

(defn- with-network-stats
  [id edn]
  (let [rx-bytes (->> (:networks edn) (vals) (map #(:rx_bytes %)) (reduce +) )
        tx-bytes (->> (:networks edn) (vals) (map #(:tx_bytes %)) (reduce +))]
   {:rx-bytes (format "%.2fMB" (-> (/ rx-bytes 1024) (/ 1024) (float) ))
    :tx-bytes (format "%.2fMB" (-> (/ tx-bytes 1024) (/ 1024) (float))) }))

(defn stats
  [container] 
  (let [id (apply str (rest (first (:Names container))))
        url (format "http://%s/containers/%s/stats" docker-tcp-address id)
        #^java.net.URLConnection con (->> (java.net.URL. url) (.openConnection)  )]
    (.setReadTimeout con 3000) 
    ;停止中のコンテナはreadTimeoutになる
    (try (readLine (io/reader (.getInputStream con )) 
                   (fn [data]
                     (let [edn (json/parse-string data true)]
                       ;TODO stats更新じゃなくてcore/asyncのpubsubにしてchanelにブロードキャストする
                       (swap! docker-stats assoc (keyword (str "id" id)) 
                              {:id id 
                               :down false
                               :memory (with-memory-stats id edn)
                               :network (with-network-stats id edn)
                               :block-io (with-block-io-stats id edn)
                               :cpu (with-cpu-stats id edn)} ))))
         ;timeout (コンテナstop 以外は終了)
         (catch java.net.SocketTimeoutException e
           (swap! docker-stats assoc (keyword (str "id" id)) 
                  {:id id 
                   :down true
                   :memory {:percent "0%" :usage "0MB" :limit "0GB"}
                   :network {:rx-bytes "0MB" :tx-bytes "0MB"} 
                   :block-io {:read-io "0KB" :write-io "0KB"} 
                   :cpu {:percent "0%"}} ))
         (catch Exception e
           (swap! docker-stats dissoc (keyword (str "id" id)))
           (throw e))))
  (Thread/sleep 3000)
  (recur container) )

(defn summary
  [details]
  (when-not (empty? details) 
    {:memory {:percent (->> (map #(Float/parseFloat (string/replace  (:percent (:memory %)) #"%" "")) details) 
                            (reduce +) (format "%.2f%%") ) 
              :usage (->> (map #(Integer/parseInt (string/replace (:usage (:memory %)) #"MB" "")) details) 
                          (reduce +) (format "%dMB") ) }
     :cpu {:percent (->> (map #(Float/parseFloat (string/replace (:percent (:cpu %)) #"%" "")) details) 
                         (reduce +) (format "%.2f%%") ) }
     :network {:rx-bytes (->> (map #(Float/parseFloat 
                                     (string/replace (:rx-bytes (:network %)) #"MB" "")) details) 
                              (reduce +) (format "%.2fMB") ) 
               :tx-bytes (->> (map #(Float/parseFloat 
                                     (string/replace  (:tx-bytes (:network %)) #"MB" "")) details) 
                              (reduce +) (format "%.2fMB") ) }
     :block-io {:read-io (->> (map #(Integer/parseInt 
                                     (string/replace (:read-io (:block-io %)) #"KB" "")) details) 
                              (reduce +) (format "%dKB") ) 
                :write-io (->> (map #(Integer/parseInt 
                                      (string/replace (:write-io (:block-io %)) #"KB" "")) details) 
                               (reduce +) (format "%dKB") ) }}))


