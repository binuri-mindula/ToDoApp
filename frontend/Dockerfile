FROM node:21-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# serve the built application with Nginx
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# container listens on port 80 
EXPOSE 80

# command to start Nginx
CMD ["nginx", "-g", "daemon off;"]