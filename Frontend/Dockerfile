FROM node:latest AS build

WORKDIR /workspace/web
COPY package*.json ./
ARG VITE_API_SERVER
RUN npm install
COPY . .

RUN npm run build

FROM nginx:latest AS production
COPY --from=build /workspace/web/dist /var/www/app
COPY nginx.conf /etc/nginx/conf.d/default.conf