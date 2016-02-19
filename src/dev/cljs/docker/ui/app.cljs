(ns ^:figwheel-no-load docker.ui.app
  (:require  
   [figwheel.client :as figwheel :include-macros true]))

(enable-console-print!)

(fw/start  
 {:on-jsload run
  :websocket-url "ws://localhost:3450/figwheel-ws"})
