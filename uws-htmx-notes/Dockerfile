# FROM node:20-alpine
FROM node:latest
WORKDIR /usr/server
COPY package*.json .
RUN npm ci --only=production
RUN npm i
COPY src/ .

EXPOSE 8000
# COPY dist/index.js .
# COPY dist/uws_linux_x64_127.node .
# RUN chmod +x uws_linux_x64_127.node
# CMD ["node", "index.js"]
CMD ["node", "server.js"]
