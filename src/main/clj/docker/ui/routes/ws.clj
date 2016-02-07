(ns docker.ui.routes.ws
  (:require  
   [compojure.core :refer  [GET POST PUT DELETE defroutes context]]
   [docker.ui.components.failure :refer  (failed? fail)]
   [docker.ui.components.docker :as docker]
   [clojure.tools.logging :as log]
   [chord.http-kit :refer  [with-channel]]
   [clojure.core.async :refer  [<! >! put! close! go go-loop timeout pub sub chan]]
   [ring.util.response :refer  [response status]])
  (:import 
   [docker.ui.components.failure Failure]))


(defn- close-channel!
  "Close a channel."
  [channel cause]
  (log/info  "close channel:" cause)
  (close! channel))

(def publisher  (chan))

(def publication
    (pub publisher #(:topic %)))

(defn publish-docker-stats 
  []
  (let [detail (sort-by :down (vals @docker/docker-stats))
        response {:summary (docker/summary detail) :detail detail}]
    (go (>! publisher {:topic :docker-stats :data response }))))

(defn docker-stats
  "A websocket requrest hander that returns server times repeatedly."
  [req]
  (if  (:websocket? req)
    (with-channel
      req channel
      (let [subscriber (chan)]
        (sub publication :docker-stats subscriber)
        (go-loop 
         [] 
         (let [response (:data (<! subscriber))] 
           (println "subscribed")
           (if-not (>! channel response)
             (close-channel! channel  "can't send server time.")
             (recur))))))))
    "Not Supported (use websocket)"

(defroutes routes 
  (context "/ws" []
    (GET "/docker/stats" [] docker-stats )))
