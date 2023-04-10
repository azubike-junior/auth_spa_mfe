# pull official base image
FROM node:18.14-alpine3.16 as development

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies

COPY package*.json ./
RUN npm install --force --silent --only=development
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . .

# start app
RUN npm run dev

FROM node:18.14.0 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run prod