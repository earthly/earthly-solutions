FROM node:19.5.0-buster-slim 

WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY postcss.config.cjs ./
COPY tailwind.config.cjs ./
COPY vite.config.ts ./
COPY public/ ./public
COPY index.html ./

COPY src/ ./src
RUN npm install -g typescript
RUN npm install
RUN npm run build
EXPOSE 5173

ENTRYPOINT [ "npm", "run", "dev", "--host"]
