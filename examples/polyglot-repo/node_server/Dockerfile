FROM node:19-alpine3.16

WORKDIR /app
COPY package.json ./
COPY src/ ./src
RUN npm install
COPY quotes.txt ./quotes.txt
EXPOSE 8003
ENTRYPOINT [ "node", "src/index.js" ]