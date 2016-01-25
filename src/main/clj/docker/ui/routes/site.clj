(ns docker.ui.routes.site
  (:require  
   [compojure.core :refer  [GET defroutes]]
   [compojure.route :refer  [resources not-found]]
   [ring.util.response :refer  (response redirect)]))

(defmulti view-error-response class)

(defmethod view-error-response Exception  [exception]
  (. exception printStackTrace)
  {:status 500 :body  "Internal Server Error"})

(defmethod view-error-response docker.ui.components.failure.Failure  [failure]
  (let  [tag  (:tag failure)
         msg  (:msg failure)
         err  (fn  [status]
                {:status status
                 :headers  {"Content-Type"  "text/html; charset=utf-8"}
                 :body  (merge  {:tag tag}  (when  (some? msg)  {:msg msg}))})]
    (condp = tag
      :bad-parameter  (err 400)
      :forbidden  (err 403)
      :not-found  (err 404)
      :conflict  (err 409)
      (err 500))))

(defmacro view-response
  [& proc]
  `(let  [result# (do ~@proc)]
     (if  (failed? result#)
       (view-error-response result#)
       result#)))

(defroutes routes
  (resources  "/")
  (not-found "Not found"))
