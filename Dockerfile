FROM node:latest

ADD package.json /app/package.json
WORKDIR /app
ADD . /app
ARG REACT_APP_API_URL
ENV NODE_PATH=/app/node_modules
ENV PATH=$PATH:/app/node_modules/.bin
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm install
EXPOSE 5000


RUN npm run build

CMD ["npm", "run", "serve"]