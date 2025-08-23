FROM node:latest

COPY . /workspace/meal-back
WORKDIR /workspace/meal-back

ARG POSTGRES_DB
ARG POSTGRES_USER
ARG POSTGRES_PASSWORD
ARG DB_HOST
ARG DB_PORT

RUN npm install
CMD ["npm", "start"]