(ns docker.ui.routes.api
  (:require  
   [compojure.core :refer  [GET POST PUT DELETE defroutes context]]
   [docker.ui.components.failure :refer  (failed? fail)]
   [docker.ui.components.docker :as docker]
   [clojure.tools.logging :as log]
   [ring.util.response :refer  [response status]])
  (:import 
   [docker.ui.components.failure Failure]))

(defmulti api-error-response class)

(defmethod api-error-response Throwable [exception]
  (. exception printStackTrace)
  {:status 500 :body  "Internal Server Error"})

(defmethod api-error-response Failure [failure]
  (let  [tag  (:tag failure)
         msg  (:msg failure)
         err  (fn  [status]  {:status status :body  (merge  {:tag tag}  (when  (some? msg)  {:msg msg}))})]
    (condp = tag
      :bad-parameter  (err 400)
      :forbidden  (err 403)
      :not-found  (err 404)
      :conflict  (err 409)
      (err 500))))

(defmacro api-response
  [& proc]
  `(let  [result# (do ~@proc)]
     (if  (failed? result#)
       (api-error-response result#)
       (response result#))))


(defroutes routes 
  (context "/api" []
           (GET "/containers/:id" [id] (api-response (docker/container id)))
           (GET "/health"  [] (api-response  {:status "UP"}))))
