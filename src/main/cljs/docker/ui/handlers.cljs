(ns docker.ui.handlers 
  (:require
   [ajax.core :as ajax]
   [docker.ui.views :as view]
   [accountant.core :as accountant]
   [re-frame.core :as re-frame]))

;DB初期化
(re-frame/register-handler
 :initialize-db
 (fn [_ _] 
   {:current-view view/default-view}))

;統計を更新する
(re-frame/register-handler 
 :update-stats 
 (fn [db [_ stats]]
   (assoc db :stats stats )))

;表示画面を切り替える
(re-frame/register-handler 
 :change-view 
 (fn [db [_ page]]
   (assoc db :current-view page)))

;画面遷移する
(re-frame/register-handler
 :navigate
 (fn [db [_ url]]
   (accountant/navigate! url) 
   db))

;コンテナ情報取得成功
(re-frame/register-handler              
 :inspect-container-success            
 (fn
   [db [_ id response]]
   (re-frame/dispatch [:change-view #(view/info-view response)])
   (assoc db :loading? false)))

;コンテナ情報取得失敗
(re-frame/register-handler             
 :inspect-container-failure            
 (fn
   [db [_ e]]
   (println e)
   (assoc db :loading? false)))

;コンテナの情報を取得
(re-frame/register-handler 
 :inspect-container 
 (fn [db [_ id]] 
   (ajax/GET (str "/api/containers/" id)  
             {:handler (fn [res] (re-frame/dispatch [:inspect-container-success id res]) )
              :error-handler (fn [e] (re-frame/dispatch [:inspect-container-failure e])) }) 
   (assoc db :loading? true)))

;コンテナ開始成功
(re-frame/register-handler 
 :start-container-success 
 (fn [db [_ id]] 
   (accountant/navigate! (str "/containers/" id "/start/complete") ) 
   (assoc db :loading? false)))

;コンテナ開始失敗
(re-frame/register-handler 
 :start-container-failure
 (fn [db [_ id]] 
   (accountant/navigate! (str "/containers/" id "/start/failure") ) 
   (assoc db :loading? false)))

;コンテナ開始
(re-frame/register-handler 
 :start-container 
 (fn [db [_ id]] 
   (ajax/POST (str "/api/containers/" id "/start")  
             {:handler (fn [res] (re-frame/dispatch [:start-container-success id]) )
              :error-handler (fn [e] (re-frame/dispatch [:start-container-failure id])) }) 
   (assoc db :loading? true)))

;コンテナ停止成功
(re-frame/register-handler 
 :stop-container-success 
 (fn [db [_ id]] 
   (accountant/navigate! (str "/containers/" id "/stop/complete") ) 
   (assoc db :loading? false)))

;コンテナ停止失敗
(re-frame/register-handler 
 :stop-container-failure
 (fn [db [_ id] ] 
   (accountant/navigate! (str "/containers/" id "/stop/failure") ) 
   (assoc db :loading? false)))

;コンテナ停止
(re-frame/register-handler 
 :stop-container 
 (fn [db [_ id]] 
   (ajax/POST (str "/api/containers/" id "/stop")  
             {:handler (fn [res] (re-frame/dispatch [:stop-container-success id]) )
              :error-handler (fn [e] (re-frame/dispatch [:stop-container-failure id])) }) 
   (assoc db :loading? true)))


