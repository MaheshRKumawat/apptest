FROM --platform=linux/amd64 node:19-alpine3.16

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "node", "server.js" ]