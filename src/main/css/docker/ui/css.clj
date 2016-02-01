(ns docker.ui.css
  (:require [garden.def :refer  [defstylesheet defstyles]]
            [garden.units :refer  [px]]))

;lein-gardenするとdefstylesheeだと何も出力されない
(defstyles screen
  (list 
   [:h2 {:color "red"}]
   [:table :tbody :thead {:color "red"}]
   [:div.styleclass  {:color "red"}]
   [:#id  {:color "red"}]
   [:input:focus  {:color "red"}]
   [:body {:color "red"}]))


