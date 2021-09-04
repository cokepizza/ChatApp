# CHATAPP

Real-time Chat Application    
(This repository is for introduction. More complete commercial code is managed in a private repository)

----

## Table of contents

[● Technical Stack](#Technial-Stack)  
[● Service Overview](#Service-Overview)  
[● Service Contents](#Service-Contents)  
[● Upcoming Work](#Upcoming-Work)  

## Technical Stack

* Infra
  * AWS EC2
  * AWS S3
  * AWS CloudFront
  * Nginx
  * Mysql
    * Sequelize
  * Docker
  * kubernates

* Backend
  * Node.js
  * Express
  * Token-based authentication
    * JWT
  * SocketIO

* Frontend
  * React Native
  * Redux
    * Thunk
    * Saga
  * React Navigation

## Architecture
![architecture drawio](https://user-images.githubusercontent.com/56418546/132109676-cd291e0b-09c4-441c-9af5-0170d8d590f5.png)

## Service Overview

* How this service works
  * How do you deploy to both devices Android & IOS ?
    * By using ReactNative, you can replace native mobile development with javascript
  * How do you plan to handle if there are many requests?
    * Basically, the server is developed in a direction that allows scale out
    * For scale out, event sharing and query caching are conducted using Redis
    * Finally, it will go up to the container via docker and the number of containers will be automatically adjusted through kubernetes
    * Static data such as images are stored in S3 storage and can be quickly received through cdn like cloudfront
* Chat Rules
  * Authentication
    * JWT tokens are given through authentication. The token will be refreshed in the middle and remain in the device's asyncstorage for automatic login
    * Considering Scalability, I used the passport library for login. In the future, Facebook and KakaoTalk login will be supported separately from email login
  * Chating
    * Chatting takes place in real time, and message notifications are sent even when you are not in the Chat tab
  * About Recommendation System
    * We will calculate tastes and scores based on user-to-user evaluation
    * The evaluation will be conducted by at least 30 people, a standard that can approximate the normal distribution
    * Like Netflix, we will increase user satisfaction based on the recommendation algorithm

## Service Contents

* SignIn & SignUp
  Coming soon...
* Initial Screen
  Coming soon...
* Chat
  Coming soon...
* ETC
  Coming soon...

## Upcoming Work

* SignIn and SignUp have been implemented
* Nginx, EC2, S3, and CloudFront infrastructure setup is complete
* Crop and upload the image is complete
* Scale out base such as event sharing based on socket.io-redis were implemented
* Basic chat function is available
