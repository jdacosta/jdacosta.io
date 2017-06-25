FROM node:5.10.1
MAINTAINER Julien Martins Da Costa <julien.martinsdacosta@gmail.com>

# create directory
RUN mkdir -p /usr/src/jdacosta.io
WORKDIR /usr/src/jdacosta.io

# install pm2
RUN npm install -g pm2

# npm deps
COPY package.json /usr/src/jdacosta.io/
RUN npm install

# custom code
COPY . /usr/src/jdacosta.io/

# make prod
RUN npm run prod

CMD ["npm", "start"]
EXPOSE 32000
