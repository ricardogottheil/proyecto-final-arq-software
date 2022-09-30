FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG DEFAULT_PORT=3000

ARG DEFAULT_URI=http://localhost:5001

ENV PORT $DEFAULT_PORT

ENV REACT_APP_API_URI=$DEFAULT_URI

EXPOSE $PORT

CMD ["npm", "start"]