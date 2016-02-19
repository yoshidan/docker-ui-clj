(ns docker.ui.routes 
  (:require-macros 
   [secretary.core :refer [defroute]])
  (:require
   [docker.ui.views :as view]
   [re-frame.core :as re-frame]))

(defroute "/containers/:id" {:keys [id]}
  (re-frame/dispatch [:inspect-container id]))

(defroute "/stats" {} 
  (re-frame/dispatch [:change-view view/stats-view]))

(defroute "/containers/:id/start" {:keys [id]} 
  (re-frame/dispatch [:change-view #(view/start-view id) ]))

(defroute "/containers/:id/start/complete" {:keys [id]} 
  (re-frame/dispatch [:change-view #(view/start-complete-view id) ]))

(defroute "/containers/:id/start/failure" {:keys [id]} 
  (re-frame/dispatch [:change-view #(view/start-failure-view id) ]))

(defroute "/containers/:id/stop" {:keys [id]} 
  (re-frame/dispatch [:change-view #(view/stop-view id) ]))

(defroute "/containers/:id/stop/complete" {:keys [id]} 
  (re-frame/dispatch [:change-view #(view/stop-complete-view id) ]))

(defroute "/containers/:id/stop/failure" {:keys [id]} 
  (re-frame/dispatch [:change-view #(view/stop-failure-view id) ]))



