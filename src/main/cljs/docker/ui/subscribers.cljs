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
 :current-page
 (fn [db]      
   (reaction (:current-page @db))))

