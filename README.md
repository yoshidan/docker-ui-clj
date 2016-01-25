# akagi/ui.site

ui for site developer

## Prerequisites

You will need [Leiningen][1] 2.0 or above installed.

[1]: https://github.com/technomancy/leiningen

## Running

To start a web server for the application, run:

```
lein cljsbuild [once|auto]
lein ring server
```

or

```
lein server
```

## Web API

for dev server

```
# reload, start, stop, terminate
curl -XPOST 'localhost:31901/api/public/reload/[env-cd]?api-key=[api-key]'
curl -XPOST 'localhost:31901/api/public/start/[env-cd]?api-key=[api-key]'
curl -XPOST 'localhost:31901/api/public/stop/[env-cd]?api-key=[api-key]'
curl -XPOST 'localhost:31901/api/public/terminate/[env-cd]?api-key=[api-key]'
# upgrade
curl -X POST 'localhost:31901/api/public/upgrade/[env-cd]/[release-id]?api-key=[api-key]'
curl -H "Accept: application/json" -H "Content-type: application/json" -X POST 'localhost:31901/api/public/upgrade/[env-cd]/[release-id]?api-key=[api-key]' -d \
'{
  "params": {
    "release-id" : "1",
    "db-clean-type" : "1",
    "dblink-required" : "0",
    "membersync-required" : "0",
    "sim-site-id" : ""
  }
}'
```

## Production

To start a web server at production envrionment:

```
lein ring uberjar
./start.sh
```
## License

Copyright © 2015 Recruit Technologies Co.,Ltd.
