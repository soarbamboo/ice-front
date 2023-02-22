FROM node:14-alpine

RUN  mkdir -p /home/ice-front 

WORKDIR /home/ice-front

COPY  . /home/ice-front

COPY package.json /home/ice-front/
COPY yarn.lock /home/ice-front/

RUN  npm install 
RUN npm run build

ENV HOST 0.0.0.0 &&  PORT 7001

EXPOSE 7001

CMD [ "npm", "start" ]
