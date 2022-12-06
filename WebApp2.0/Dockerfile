# WEB UI Container

FROM node:18-alpine

EXPOSE 4200

WORKDIR /webapp

COPY . .

RUN npm install

CMD ["./node_modules/.bin/ng", "serve", "--host", "0.0.0.0", "--port", "4200"]



