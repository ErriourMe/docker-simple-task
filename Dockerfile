# dockerhub: erriour/simple

FROM node:16-alpine

COPY package*.json ./

RUN npm install

WORKDIR /app

COPY . /app

EXPOSE 8080

CMD [ "node", "server.js" ]