FROM node:16.15.0-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm i
EXPOSE 5000
CMD ["npm", "run", "start"]