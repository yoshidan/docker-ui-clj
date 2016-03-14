(ns docker.ui.app 
  (:require
   [docker.ui.views :as view]
   [docker.ui.handlers :as handlers]
   [docker.ui.subs :as subscribers]
   [docker.ui.routes :as routes]
   [accountant.core :as accountant]
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [clojure.browser.repl :as repl]))


(defn ^:export run
  []
  (re-frame/dispatch-sync [:initialize-db])
  (accountant/configure-navigation!)
  (accountant/dispatch-current!)
  (reagent/render [view/current-view] (.getElementById js/document "app") ))
