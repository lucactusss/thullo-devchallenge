FROM node:14.16.1-alpine3.12

WORKDIR /usr/src/app

COPY ./ ./

RUN yarn global add tsc

RUN yarn install

RUN yarn build

EXPOSE 4003

CMD ["node", "./build/src/index.js"]