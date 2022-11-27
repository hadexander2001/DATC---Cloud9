# WEB UI Container

FROM node:18-alpine

EXPOSE 4200

RUN npm install -g @angular/cli

WORKDIR /webapp

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .


CMD ["ng", "serve", "--host", "0.0.0.0"]



