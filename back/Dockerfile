FROM node:14.15.4-alpine3.12

WORKDIR /usr/src/app

COPY ./ ./

RUN yarn global add tsc

RUN yarn install

RUN yarn build

COPY ./build ./build

EXPOSE 4003

CMD ["node", "./build/src/index.js"]