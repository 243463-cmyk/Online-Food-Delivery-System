FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# ADD THIS LINE RIGHT HERE TO FORCE INJECT THE CORRECT URI:
ENV MONGO_URI=mongodb://host.docker.internal:27017/online_food_delivery

EXPOSE 3000

CMD ["node", "app.js"]