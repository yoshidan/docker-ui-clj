## Development
```
lein figwheel
lein garden auto
lein run
```

## Production
```
lein uberjar
export DOCKER_TCP_ADDRESS=localhost:2375
java -jar docker.ui.jar
```
