(ns docker.ui.subscribers
  (:require-macros 
   [reagent.ratom :refer  [reaction]])
  (:require
   [re-frame.core :as re-frame]))

(re-frame/register-sub
 :stats
 (fn [db]       
   (reaction (:stats @db))))

(re-frame/register-sub
 :current-view
 (fn [db]      
   (reaction (:current-view @db))))

