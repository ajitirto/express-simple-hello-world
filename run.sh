#!/bin/bash

npm install 

npm run start

sudo docker build -t express:v1 . 

sudo docker run --name express-container-v1  -p 3000:3000 -d express:v1

### curl localhost:3000  # just "hello world"


## docker-compose.yml

# version: '3.8'
# services:
#   app:
#     build:
#       context: .
#       target: Dockerfile
#     ports:
#       - "3000:3000"  
#     command: ["node", "index.js"]
#     working_dir: /app
