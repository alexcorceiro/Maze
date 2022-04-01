FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY package*.json ./
EXPOSE 3000
ENTRYPOINT [ "time","node","./main.js" ]
CMD ["node", "index.js"]
