FROM node:10.15

COPY package.json package-lock.json ./

RUN npm install && mkdir ./server-app && mv ./node_modules ./server-app

WORKDIR ./server-app

COPY . /server-app

EXPOSE 8200

CMD ["npm", "start"]