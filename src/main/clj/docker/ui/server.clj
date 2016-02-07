(ns docker.ui.server 
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
  ;docke-status
  (let [processing (atom {})] 
    (async/go-loop 
     [] 
     (async/<!  (async/timeout 3000))
     (let [containers (docker/ps)
           named-id #(apply str (rest (first (:Names %)))) ]
       ;現在処理中のものは除く
       (->> (filter #(not (contains? @processing (named-id %) )) containers)
            (map  
             (fn [container] 
               (swap! processing assoc (named-id container) true)
               ;非同期でstats取得
               (async/go
                []
                (try
                 ;TODO 非同期IOにしてスレッド占有しないようにする
                 (docker/stats container)
                 (catch Exception e
                   (swap! processing dissoc (named-id container)))))))
            (doall)) )
     (recur)))
  ;publish
  (async/go-loop
   []
   (async/<! (async/timeout 1000))
   (ws/publish-docker-stats) 
   (recur))

  (log/info "Starting server on port 3000")
  (run-server http-handler {:port 3000}) )
