FROM node:14-alpine

WORKDIR /app

COPY package.json package-lock.json gulpfile.js webpack.config.js /app/

RUN npm install && npm run build

FROM node:14-alpine

WORKDIR /app

COPY --from=0 /app/dist .

RUN npm install -g serve && serve ${WEB_PORT:-5100} --cors