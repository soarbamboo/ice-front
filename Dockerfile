FROM node:16-alpine

RUN  mkdir -p /home/ice-front 

WORKDIR /home/ice-front

COPY  . /home/ice-front
COPY package.json /home/ice-front/
COPY yarn.lock /home/ice-front/

RUN apk update && apk upgrade && apk add --no-cache git 
# RUN apk install -y procps
# RUN apk add --update git
# - apk add --update nodejs npm

RUN npm install -g yarn  --force && yarn config set registry https://registry.npm.taobao.org && yarn  && yarn build

EXPOSE 8091

CMD [ "yarn", "start" ]
