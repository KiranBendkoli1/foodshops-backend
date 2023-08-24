FROM node:17


# working dir
WORKDIR /app

# copy Package json file
COPY ./package*.json ./

# install packages
RUN npm install

# Copy source file
COPY . .

EXPOSE 5000

CMD [ "npm","run", "dev"  ]
