# Stage 0 - Building
FROM node:7.10 AS stage0
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 1 - Deploy to nginx
FROM nginx:1.12-alpine
COPY --from=stage0 /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
