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
   [compojure.core :refer  [routes context]]
   [ring.middleware.defaults :refer  [wrap-defaults api-defaults site-defaults]]
   [ring.util.response :refer  [response status content-type]]
   [org.httpkit.server :refer  [run-server]]))


(defn api-handler
  "API用のmiddleware, routesを束ねたハンドラ。
   リクエストされたURIが/apiから始まらない場合は全ての処理をスキップする。
   これはAPI用のハンドラがサイト用ハンドラの前段に動くため、スキップ処理を入れないと
   画面系へのリクエストに対してもAPI用のmiddlewareが動作してしまうため。"
  [handler]
  (fn [{:keys  [uri] :as request}]
    (when  (. uri startsWith  "/api")
      (handler request))))

(defn ws-handler
  [handler]
  (fn [{:keys [uri] :as request}]
    (when  (. uri startsWith "/ws")
      (handler request))))


(defn site-handler
  "サイト用のmiddleware, routesを束ねたハンドラ。"
  [handler]
  handler)

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
