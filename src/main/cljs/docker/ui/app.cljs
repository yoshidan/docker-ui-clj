(ns docker.ui.app
  (:require-macros 
   [cljs.core.async.macros :refer  [go]]
   [reagent.ratom :refer  [reaction]])
  (:require
   [ajax.core :as ajax]
   [chord.client :refer [ws-ch]]
   [cljs.core.async :refer [put! chan <! >! timeout close!]]
   [docker.ui.views :as view]
   [accountant.core :as accountant]
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [clojure.browser.repl :as repl]))

(enable-console-print!)

;----------------------------
; subscribers
;----------------------------
(re-frame/register-sub
 :stats
 (fn [db]       
   (reaction (:stats @db))))

(re-frame/register-sub
 :current-page
 (fn [db]      
   (reaction (:current-page @db))))

;--------------------------------
; handlers
;--------------------------------

;統計を更新する
(re-frame/register-handler 
 :update-stats 
 (fn [db [_ stats]]
   (assoc db :stats stats )))

;画面遷移する
(re-frame/register-handler 
 :change-view 
 (fn [db [_ page]]
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

(defn ^:export run
  []
  (go 
   (let  [{:keys  [ws-channel]}  (<! (ws-ch  "ws://localhost:3000/ws/docker/stats" (:format :edn) ))]
     (loop []
       (let [{:keys  [message error]}  (<! ws-channel)]
         (if error
           (do
            (close! ws-ch)
            (println "Uh oh:" error))
           (let [response message]
             ;reagent.sessionではstateが一個なので、session使うと関係ないキーでも
             ;session使っているpageで再レンダリングが走ってしまう。
             (re-frame/dispatch [:update-stats message])
             (recur )))))))

  (accountant/configure-navigation!)
  (accountant/dispatch-current!)
  (reagent/render-component [view/current-view] (.getElementById js/document "app") ))


