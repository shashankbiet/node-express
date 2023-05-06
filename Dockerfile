FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies only if there is changes in package file
COPY package.json .
RUN npm i

# Bundle app source
COPY . .

CMD ["npm", "start"]