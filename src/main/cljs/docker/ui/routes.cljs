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


