FROM node:16-alpine

WORKDIR /consumer

COPY package.json .

RUN npm install

COPY . .

ARG DEFAULT_RABBITMQ_URI="amqp://localhost:5672"

ARG DEFAULT_MONGODB_URI="mongodb://localhost:27017"

ENV DEFAULT_RABBITMQ_URI $DEFAULT_RABBITMQ_URI

ENV DEFAULT_MONGODB_URI $DEFAULT_MONGODB_URI


CMD ["npm", "start"]