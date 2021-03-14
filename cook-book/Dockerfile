# Development
## Create image based on the official Node image from dockerhub
#FROM node
## Create a directory where our app will be placed
#RUN mkdir -p /usr/src/app
## Change directory so that our commands run inside this new directory
#WORKDIR /usr/src/app
## Copy dependency definitions
#COPY package.json /usr/src/app
## Install dependecies
#RUN npm install
## Get all the code needed to run the app
#COPY . /usr/src/app
## Expose the port the app runs in
#EXPOSE 4200
## Serve the app
#CMD ["npm", "start"]

# Production

#Step 1

FROM node As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Step 2

FROM nginx:1.15.8-alpine

COPY --from=builder /usr/src/app/dist/cook-book/ /usr/share/nginx/html
