FROM node:alpine

#set the working directory
WORKDIR /usr/app

#COPY needed files and folders
COPY ./package.json ./
COPY ./tsconfig.json ./
COPY ./lib ./lib
COPY ./config ./config

#install dependencies and typescript globaly
RUN npm install
RUN npm install -g typescript
RUN sh -c tsc lib/server.ts

#run server
CMD ["npm", "run", "start:dev"]
