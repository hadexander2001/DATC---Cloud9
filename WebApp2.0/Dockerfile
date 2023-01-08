# WEB UI Container

FROM node:18-alpine

EXPOSE 4200

RUN mkdir -p /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install @angular/cli --force
RUN npm install  --force

RUN npm run build

CMD ["npm", "start"]