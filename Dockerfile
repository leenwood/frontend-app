FROM node:latest

# Set working directory
WORKDIR /react

#
COPY package.json /react/package.json
COPY package-lock.json /react/package-lock.json

# Same as npm install
RUN npm install

COPY . /react

ENV CI=true
ENV PORT=3000

CMD [ "npm", "start" ]
