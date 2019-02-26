FROM node:8.14.0-alpine as validate

# Update and install base packagesd
RUN apk add --update --no-cache make unzip bash && \
  rm -rf /var/cache/apk/*

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

ENTRYPOINT [ "npm", "start" ]
CMD sleep 30
