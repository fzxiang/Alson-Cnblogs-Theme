FROM node:14-alpine

WORKDIR /app

COPY package.json package-lock.json gulpfile.js webpack.config.js /app/

RUN npm install --registry=https://registry.npm.taobao.org

COPY /src /app/src

RUN npm run build

FROM nginx:alpine

WORKDIR /app

COPY default.conf /etc/nginx/conf.d/default.conf
COPY ssl /etc/ssl
COPY .well-known /app/.well-known

COPY --from=0 /app/dist .

CMD sed -i "s/web_port/${WEB_PORT:-80}/" /etc/nginx/conf.d/default.conf \
    && nginx -g 'daemon off;'
