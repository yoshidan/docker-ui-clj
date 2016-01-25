(ns docker.ui.middleware 
  (:require 
   [clojure.edn :as edn ]      
   [clojure.tools.logging :as log]
   [clojure.string :refer  [blank?]]
   [ring.util.response :refer  [content-type redirect]] ))

(defn- edn-request?
  [request]
  (let  [ctype  (:content-type request)]
    (= "application/edn" ctype)))

(defn- read-edn  [request]
  (when  (edn-request? request)
    (when-let  [body  (:body request)]
      (let  [body-string  (slurp body)]
        (try
         [true  (edn/read-string body-string)]
         (catch Exception ex
           [false nil]))))))

(defn- favicon-resource?
    "/favicon.iconに対するリクエストかどうか判定する"
      [{:keys  [uri]}]
        (= uri  "/favicon.ico"))

(defn- asset-resource?
    "アセット(css/js/images)に対するリクエストかどうか判定する"
      [{:keys  [uri]}]
        (. uri startsWith  "/assets"))

(defn- static-resource?
  [request]
  (or  (favicon-resource? request)  (asset-resource? request)))

(defmacro defwrap
  "動的リソースを対象としたmiddlewareのwrap処理を定義する"
  [name  [handler :as bindings] f]
  `(defn ~name ~bindings
     (fn  [request#]
       (if  (static-resource? request#)
         (~handler request#)
         (~f request#)))))

(defwrap wrap-context
  [handler]
  (fn [request]
    (log/infof "access %s" (:uri request) )
    (handler request)))

(defwrap wrap-edn-response
  [handler]
  (fn  [request]
    (let  [response  (handler request)]
      (if  (coll?  (:body response))
        (let  [edn-response  (update-in response  [:body] pr-str)]
          (if  (contains?  (:headers response)  "Content-Type")
            edn-response
            (content-type edn-response  "application/edn; charset=utf-8")))
        response))))

(defwrap wrap-edn-body
  [handler]
  (fn  [request]
    (if-let  [[valid? edn]  (read-edn request)]
      (if valid?
        (handler  (assoc request :body edn))
        {:status 400 :headers  {"Content-Type"  "text/plain"} :body  "Malformed edn in request body."})
      (handler request))))
