(ns docker.ui.app
  (:require-macros 
   [cljs.core.async.macros :refer [go]])
  (:require
   [chord.client :refer [ws-ch]]
   [cljs.core.async :refer [put! chan <! >! timeout close!]]
   [docker.ui.views :as view]
   [docker.ui.handlers :as handlers]
   [docker.ui.subscribers :as subscribers]
   [docker.ui.routes :as routes] ;利用しなくても参照に加えないとoptimizations :noneの時にビルドされない
   [accountant.core :as accountant]
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [clojure.browser.repl :as repl]))


(defn ^:export run
  []
  (go 
   (let  
     [ws-prefix (let [location  (.-location js/window)
                      protocol  (.-protocol location)
                      host  (.-host location)]
                  (if (= protocol  "https")
                    (str  "wss://" host)
                    (str  "ws://" host)))
      {:keys [ws-channel]}  (<! (ws-ch  (str ws-prefix "/ws/docker/stats") (:format :edn) ))]
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
             (recur)))))))
  (accountant/configure-navigation!)
  (accountant/dispatch-current!)
  (reagent/render-component [view/current-view] (.getElementById js/document "app") ))
