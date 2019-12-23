FROM node:latest

ADD package.json /app/package.json
WORKDIR /app
ADD . /app

ENV NODE_PATH=/app/node_modules
ENV PATH=$PATH:/app/node_modules/.bin

RUN npm install

EXPOSE 5000

ARG REACT_APP_API_URL

RUN npm run build

CMD ["npm", "run", "serve"]