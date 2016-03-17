(ns docker.ui.routes.ws
  (:require  
   [compojure.core :refer  [GET POST PUT DELETE defroutes context]]
   [docker.ui.components.failure :refer  (failed? fail)]
   [docker.ui.components.docker :as docker]
   [clojure.tools.logging :as log]
   [chord.http-kit :refer  [with-channel]]
   [clojure.core.async :refer  [<! >! put! close! go go-loop timeout chan]]
   [ring.util.response :refer  [response status]])
  (:import 
   [docker.ui.components.failure Failure]))


(defn- close-channel!
  "Close a channel."
  [channel cause]
  (log/info  "close channel:" cause)
  (close! channel))

(defn docker-stats
  "A websocket requrest hander that returns server times repeatedly."
  [req]
  (if  (:websocket? req)
    (with-channel
      req channel
      (let [subscriber (chan)]
        (docker/subscribe-stats subscriber) 
        (go-loop 
         []
         (let [response (:data (<! subscriber))] 
           (if-not (>! channel response)
             (do
              (docker/unsubscribe-stats subscriber) 
              (close-channel! channel  "can't publish docker stats."))
             (recur))))))))
    "Not Supported (use websocket)"

(defroutes routes 
  (context "/ws" []
    (GET "/docker/stats" [] docker-stats )))
