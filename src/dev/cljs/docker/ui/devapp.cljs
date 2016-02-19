(ns docker.ui.devapp
  (:require  
   [docker.ui.app]
   [figwheel.client :as figwheel :include-macros true]))

(enable-console-print!)

(figwheel/watch-and-reload  
 :websocket-url "ws://localhost:3450/figwheel-ws"
 :jsload-callback docker.ui.app.run)
