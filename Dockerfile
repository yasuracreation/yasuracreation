FROM node:14-alpine
ENV NODE_ENV=production
ENV PORT=3333
ENV PORT_SSR=4000
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
RUN npm install -g @angular/cli



CMD ng serve
