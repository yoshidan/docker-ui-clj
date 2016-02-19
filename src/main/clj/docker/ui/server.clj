(ns docker.ui.server 
  (:gen-class)
  (:require
   [clojure.core.async :as async]
   [docker.ui.components.docker :as docker]
   [docker.ui.routes.api :as api]
   [docker.ui.routes.ws :as ws]
   [docker.ui.routes.site :as site]
   [docker.ui.middleware :as mw]
   [clojure.tools.logging :as log]
   [net.cgrand.reload :refer  [auto-reload]]
   [ring.middleware.reload :as reload]
   [compojure.core :refer  [routes context]]
   [environ.core :refer [env] :as environ]
   [ring.middleware.defaults :refer  [wrap-defaults api-defaults site-defaults]]
   [ring.util.response :refer  [response status content-type]]
   [org.httpkit.server :refer  [run-server]]))

(defn- dev? [] 
  (environ/env :dev?))

(defn api-handler
  "API用のmiddleware, routesを束ねたハンドラ。
   リクエストされたURIが/apiから始まらない場合は全ての処理をスキップする。
   これはAPI用のハンドラがサイト用ハンドラの前段に動くため、スキップ処理を入れないと
   画面系へのリクエストに対してもAPI用のmiddlewareが動作してしまうため。"
  [handler]
  (let [h (if (dev?) (reload/wrap-reload handler) handler) ]
    (fn [{:keys  [uri] :as request}]
      (when (. uri startsWith  "/api")
        (h request)))))

(defn ws-handler
  [handler]
  (let [h (if (dev?) (reload/wrap-reload handler) handler )] 
    (fn [{:keys [uri] :as request}]
      (when (. uri startsWith "/ws")
        (h request)))))

(defn site-handler
  "サイト用のmiddleware, routesを束ねたハンドラ。"
  [handler]
  (if (dev?) (reload/wrap-reload handler) handler))

(def ^:private handlers
  (let  [api  (-> #'api/routes
                  (mw/wrap-edn-response)
                  (mw/wrap-edn-body)
                  (mw/wrap-context)
                  (wrap-defaults api-defaults)
                  (api-handler))
         ws  (-> #'ws/routes 
                  (ws-handler)) 
         site  (-> #'site/routes
                   (mw/wrap-context )
                   (wrap-defaults site-defaults )
                   (site-handler))]
    [api ws site]))

(def ^:private http-handler
    (apply routes handlers))

(defn -main  
  []
  (when (dev?) (do "Reloading Server " (auto-reload *ns*)))
  (log/info "Starting stats request for docker")
  ;docker-ps/stats
  (async/go-loop 
   []  
   (docker/stats-all) 
   (async/<! (async/timeout 10000))
   (recur))
  ;publish
  (async/go-loop
   []
   (async/<! (async/timeout 1000))
   (docker/publish-stats) 
   (recur))
  (log/info "Starting server on port 3000")
  (run-server http-handler {:port 3000}) )
