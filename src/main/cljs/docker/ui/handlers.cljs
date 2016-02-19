(ns docker.ui.handlers 
  (:require
   [ajax.core :as ajax]
   [docker.ui.views :as view]
   [re-frame.core :as re-frame]))

;統計を更新する
(re-frame/register-handler 
 :update-stats 
 (fn [db [_ stats]]
   (assoc db :stats stats )))

;画面遷移する
(re-frame/register-handler 
 :change-view 
 (fn [db [_ page]]
   (println "view change")
   (assoc db :current-page page)))

(re-frame/register-handler              
 :process-response            
 (fn
   [db [_ response]]
   ;成功時は画面遷移
   (re-frame/dispatch [:change-view #(view/info-view response)])
   (assoc db :loading? false)))

;コンテナの情報を取得
(re-frame/register-handler 
 :inspect-container 
 (fn [db [_ id]] 
   (ajax/GET (str "/api/containers/" id)  
             {:handler (fn [res] (re-frame/dispatch [:process-response res]) )
              :error-handler println}) 
   (assoc db :loading? true)))

