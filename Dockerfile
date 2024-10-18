FROM node:16.14-alpine

WORKDIR /API

COPY package* .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]