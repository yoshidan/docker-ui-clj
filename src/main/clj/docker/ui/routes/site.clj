(ns docker.ui.routes.site
  (:use 
   [hiccup.core])
  (:require  
   [hiccup.page :as hiccup]
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

(defn- single-page-view
  []
  (hiccup/html5  
   [:head
    [:title "Dokcer UI"]
    [:link {:rel "stylesheet" :href "/assets/css/out/screen.css"}]
    [:link {:rel "stylesheet" :href "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"}]]
   [:body 
    [:div {:id "app" :class "container"} 
     [:script {:src "/assets/js/app.js"}]
     [:script "docker.ui.app.run();"]]]))

(defroutes routes
  (resources  "/")
  (GET "/containers/:id" [] (single-page-view))
  (GET "/stats" [] (single-page-view))
  (not-found "Not found"))
