FROM node

WORKDIR /users/app

COPY package.json ./

RUN curl -v https://registry.npmjs.com/

COPY . .

EXPOSE 3333

CMD ["npm","run","dev"]