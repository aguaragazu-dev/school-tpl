FROM node:20-alpine

RUN apt-get update -y && apt-get upgrade -y

ARG NODE_UID=1000
ARG NODE_GID=1000

RUN getent group ${NODE_GID} || groupadd -g ${NODE_GID} node
RUN id -u node &>/dev/null || useradd -m -u ${NODE_UID} -g node node

RUN mkdir /app
WORKDIR /app

COPY --chown=node:node package.json ./
RUN npm config set prefix /home/node/.npm-packages
ENV PATH=/home/node/.npm-packages/bin:$PATH
RUN npm install

RUN npm install -g yarn

COPY --chown=node:node . .

USER node

EXPOSE 3000

ENV PORT=3000
# set hostname to localhost
ENV HOSTNAME="0.0.0.0"

CMD ["yarn", "dev"]