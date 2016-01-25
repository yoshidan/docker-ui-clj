(ns docker.ui.components.docker 
  (:require
   [clojure.java.io :as io]
   [org.httpkit.client :as http] 
   [docker.ui.components.failure :as f]
   [environ.core :refer [env] :as environ]
   [clojure.tools.logging :as log]
   [cheshire.core :as json ]))

(def docker-tcp-address (environ/env :docker-tcp-address))

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

(defn stats
  [id consumer] 
  (let [url (format "http://%s/containers/%s/stats" docker-tcp-address id)]
    (log/infof url)
    (let [rdr (io/reader url)] 
      (readLine rdr consumer))))
