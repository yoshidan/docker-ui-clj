(ns docker.ui.routes 
  (:require
   [secretary.core :as secretary]
   [docker.ui.views :as view]
   [re-frame.core :as re-frame]))

(secretary/defroute "/containers/:id" {:keys [id]}
  (re-frame/dispatch [:inspect-container id]))

(secretary/defroute "/stats" {} 
  (re-frame/dispatch [:change-view view/stats-view]))

(secretary/defroute "/containers/:id/start" {:keys [id]} 
  (re-frame/dispatch [:change-view #(view/start-view id) ]))

(secretary/defroute "/containers/:id/start/complete" {:keys [id]} 
  (re-frame/dispatch [:change-view #(view/start-complete-view id) ]))

(secretary/defroute "/containers/:id/start/failure" {:keys [id]} 
  (re-frame/dispatch [:change-view #(view/start-failure-view id) ]))

(secretary/defroute "/containers/:id/stop" {:keys [id]} 
  (re-frame/dispatch [:change-view #(view/stop-view id) ]))

(secretary/defroute "/containers/:id/stop/complete" {:keys [id]} 
  (re-frame/dispatch [:change-view #(view/stop-complete-view id) ]))

(secretary/defroute "/containers/:id/stop/failure" {:keys [id]} 
  (re-frame/dispatch [:change-view #(view/stop-failure-view id) ]))



