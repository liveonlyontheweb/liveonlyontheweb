FROM node:18-bullseye-slim
WORKDIR /front

COPY ./.env ./.env
COPY . .

ENV NODE_ENV=development

RUN yarn install
RUN yarn build

RUN yarn global add serve
