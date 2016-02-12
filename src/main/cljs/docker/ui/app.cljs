(ns docker.ui.app
  (:require-macros [cljs.core.async.macros :refer  [go]])
  (:require
   [chord.client :refer [ws-ch]]
   [cljs.core.async :refer [put! chan <! >! timeout close!]]
   [docker.ui.views :as view]
   [clojure.data :as data]
   [accountant.core :as accountant]
   [reagent.core :as reagent]
   [clojure.browser.repl :as repl]))

(enable-console-print!)

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
             (swap! view/stats assoc :stats message)
             (recur )))))))

  (accountant/configure-navigation!)
  (accountant/dispatch-current!)
  (reagent/render-component [view/current-view] (.getElementById js/document "app") ))


