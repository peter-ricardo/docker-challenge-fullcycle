# go-hello-world

A simple hello-world application written in Go with multi-stage builds

`docker build -t multi-stage ./go-hello-world
`

```
$ docker images

REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
multi-stage         latest              ae820cbd39d3        23 minutes ago      1.85MB
```

Example from [Docker Hub](https://hub.docker.com/repository/docker/peterricardo/go-fullcycle/general)

`docker run peterricardo/go-fullcycle
`