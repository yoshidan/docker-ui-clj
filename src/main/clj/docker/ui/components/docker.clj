(ns docker.ui.components.docker 
  (:require
   [clojure.java.io :as io]
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
  "Up状態の全コンテナ取得"
  []
  (let [url (format "http://%s/containers/json" docker-tcp-address) ]
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
     {:percent (format "%.2f" cpu-percent)}))

(defn- with-memory-stats
  [id edn]
  (let [usage (->> (:memory_stats edn) (:usage))
        limit (->> (:memory_stats edn ) (:limit))]
   {:percent (format "%.2f" (* 100 (float (/ usage limit)))) 
    :usage (format "%d" (int (-> (/ usage 1024) (/ 1024))))
    :limit (format "%.2f" (float (-> (/ limit 1024) (/ 1024) (/ 1024))))} ))

(defn stats
  [id ] 
  (let [url (format "http://%s/containers/%s/stats" docker-tcp-address id)]
    (let [rdr (io/reader url)] 
      (readLine rdr (fn [data]
                      (let [edn (json/parse-string data true)]
                       (swap! docker-stats assoc (keyword (str "id" id)) 
                               {:id id 
                                :memory (with-memory-stats id edn)
                                :cpu (with-cpu-stats id edn)} )))))))
