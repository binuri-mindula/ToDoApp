# node.js image
FROM node:20-alpine

WORKDIR /app

# copy package.json
COPY package*.json ./

RUN npm install

COPY . .

# container listens on port 3001
EXPOSE 3001

# container starts
CMD ["node", "Server.js"]