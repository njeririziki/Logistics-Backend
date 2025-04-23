FROM node:14

WORKDIR /main

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["node", "dist/index.js"]