#!/usr/bin/env bash
CMD=${*:1}
APP_NAME=saysomething
if [[ $CMD == 'stop' ]]; then
  echo 'Stopping Container'
  docker stop $(docker ps -aq --filter ancestor=$APP_NAME)
  echo 'Container Stopped'
  
  echo 'Removing Container'
  docker rm -f $(docker ps -aq --filter ancestor=$APP_NAME)
  echo 'Container Removed'
else

  if [ -z $(docker images -q $APP_NAME) ]; then
    echo 'Building image'
    docker build -t $APP_NAME .
  fi
    echo 'Building/Starting Container'
    docker run -it --network host --rm \
      $APP_NAME  $1 
fi
