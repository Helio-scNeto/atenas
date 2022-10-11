FROM node:16-alpine

WORKDIR /app/front

COPY package.json /app/front

RUN npm install

EXPOSE 3000
EXPOSE 80

COPY . /app/front

CMD ["npm", "start"]