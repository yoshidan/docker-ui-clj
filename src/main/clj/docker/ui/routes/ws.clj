(ns docker.ui.routes.ws
  (:require  
   [compojure.core :refer  [GET POST PUT DELETE defroutes context]]
   [docker.ui.components.failure :refer  (failed? fail)]
   [docker.ui.components.docker :as docker]
   [clojure.tools.logging :as log]
   [chord.http-kit :refer  [with-channel]]
   [clojure.core.async :refer  [<! >! put! close! go go-loop timeout]]
   [ring.util.response :refer  [response status]])
  (:import 
   [docker.ui.components.failure Failure]))


(defn- close-channel!
  "Close a channel."
  [channel cause]
  (log/info  "close channel:" cause)
  (close! channel))

(defn echo
  "A websocket requrest hander that returns server times repeatedly."
  [req]
  (if  (:websocket? req)
    (with-channel
      req channel
      (go-loop  []
               (<! (timeout 1000))
               (let [{:keys  [message error]} (<! channel)]
                 (if (or error  (nil? message))
                   (close-channel! channel  "can't get request request from a client.")
                   (if-not  (>! channel message)
                     (close-channel! channel  "can't send server time.")
                     (recur))))))
    "Not Supported (use websocket)"))

(defroutes routes 
  (context "/ws" []
    (GET "/health" [] echo )))
