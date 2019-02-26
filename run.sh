#!/usr/bin/env bash
CMD=${*:1}
APP_NAME=saySomething
if [[ $CMD == 'stop' ]]; then
    echo 'Stopping Container'
    docker stop $(docker ps -q --filter ancestor=$APP_NAME)
    docker rm -f local-redis
    echo 'Container Stopped'
else
    echo $1 $2 $3 $4 $5

    docker build -t $APP_NAME .
    docker run -it --network host --rm \
      $APP_NAME  $1 $2 $3 $4 $5
fi
