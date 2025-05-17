FROM node:lts-alpine3.17 AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat openssl

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

FROM node:lts-alpine3.17

WORKDIR /app

RUN apk add --no-cache libc6-compat openssl

COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma/app ./app

EXPOSE 3001

CMD ["node", "build/index.js"]