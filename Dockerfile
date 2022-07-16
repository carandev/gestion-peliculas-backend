FROM node

WORKDIR /blog-app

COPY package.json .

RUN npm install

COPY . .

CMD npm run dev
