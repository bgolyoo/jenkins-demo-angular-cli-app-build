FROM node:12-alpine AS app-builder

RUN mkdir -p /app

WORKDIR /app

COPY src src
COPY package.json .
COPY package-lock.json .
COPY angular.json .
COPY tsconfig.app.json .
COPY tsconfig.json .

RUN npm ci
RUN npm run build:prod

FROM node:12-alpine

RUN mkdir -p /server/node_modules \
  && mkdir -p /frontend

COPY /server/package-lock.json /server/
COPY /server/package.json /server/
COPY /server/src/ /server/src/

COPY --from=app-builder /app/dist/app/ /frontend/app/

WORKDIR /server/
RUN npm install

CMD ["node", "src/index.js"]
