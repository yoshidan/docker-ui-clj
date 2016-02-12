(ns docker.ui.routes 
  (:require
   [secretary.core :as secretary]
   [docker.ui.views :as view]
   [reagent.session :as session]
   [ajax.core :as ajax]))



(secretary/defroute "/containers/:id" {:as params}
  (ajax/GET (str "/api/containers/" (:id params))  
            {:handler (fn [res] (session/put! :current-page #(view/info-view res)))
             :error-handler js/console.log}))

(secretary/defroute "/stats" {} 
  (session/put! :current-page view/stats-view ))

(secretary/defroute "/containers/:id/start" {:keys [id]} 
  (session/put! :current-page #(view/start-view id )))

(secretary/defroute "/containers/:id/start/complete" {:keys [id]} 
  (session/put! :current-page #(view/start-complete-view id)))

(secretary/defroute "/containers/:id/start/failure" {:keys [id]} 
  (session/put! :current-page #(view/start-failure-view id)))

(secretary/defroute "/containers/:id/stop" {:keys [id]} 
  (session/put! :current-page #(view/stop-view id)))

(secretary/defroute "/containers/:id/stop/complete" {:keys [id]} 
  (session/put! :current-page #(view/stop-complete-view id)))

(secretary/defroute "/containers/:id/stop/failure" {:keys [id]} 
  (session/put! :current-page #(view/stop-failure-view id)))



