FROM node:12-alpine

RUN  mkdir -p /home/ice-front 

WORKDIR /home/ice-front

COPY  . /home/ice-front

USER node

COPY package.json /home/ice-front/
COPY yarn.lock /home/ice-front/

RUN npm config set registry https://registry.npm.taobao.org/ \
    &&  npm install 
RUN npm run build

ENV HOST 0.0.0.0 &&  PORT 7001

EXPOSE 7001

CMD [ "npm", "start" ]
