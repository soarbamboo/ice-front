FROM node:16-alpine

RUN  mkdir -p /home/ice-front 

WORKDIR /home/ice-front

COPY  . /home/ice-front


COPY package.json /home/ice-front/
COPY yarn.lock /home/ice-front/

# RUN apk update && apk upgrade \
#    && apk add --no-cache bash git openssh
RUN apt install -y procps


RUN npm install -g yarn  --force
# RUN yarn config delete proxy  \
#     && npm config rm proxy \
#     && npm config rm https-proxy
RUN yarn config set registry https://registry.npm.taobao.org && yarn  && yarn build

ENV HOST 0.0.0.0 &&  PORT 7001

EXPOSE 7001

CMD [ "yarn", "start" ]
