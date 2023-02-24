FROM node:16-alpine

RUN  mkdir -p /home/ice-front 

WORKDIR /home/ice-front

COPY  . /home/ice-front


COPY package.json /home/ice-front/
COPY yarn.lock /home/ice-front/

# RUN apk update && apk upgrade \
#    && apk add --no-cache bash git openssh

RUN  npm install -g npm 
RUN npm config set registry http://registry.npm.taobao.org/ 
RUN npm install --force 
RUN npm run build


ENV HOST 0.0.0.0 &&  PORT 7001

EXPOSE 7001

CMD [ "npm", "start" ]
