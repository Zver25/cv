FROM node:lts as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:stable
MAINTAINER Aleksandr Sviridovsky
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
EXPOSE 80
