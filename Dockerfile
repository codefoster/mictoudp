FROM node:12
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g typescript
RUN tsc
CMD npm start