FROM node:10.15

COPY package.json package-lock.json ./

RUN npm install && mkdir ./client-app && mv ./node_modules ./client-app

WORKDIR ./client-app

COPY . /client-app

EXPOSE 4200

CMD ["npm", "run", "start:docker"]