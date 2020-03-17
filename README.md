# CHATAPP

Real-time Chat Application (Currently in development)

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

## Service Overview

* How this service works
  * How do I deploy to both devices Android & IOS ?
    * Develop both devices at the same time using ReactNative
  * How do you plan to handle if there are many requests?
    * Basically, the server is developed in a direction that allows scale out
    * For scale out, event sharing and query caching are conducted using Redis
    * Finally, it will go up to the container via docker and the number of containers will be automatically adjusted through kubernetes
    * Static data such as images are stored in S3 storage and can be quickly received through cdn like cloudfront
* Chat Rules
  * Authentication
    * 
  * Chating
    * 
  * About Recommendation System
    * 
* Functions
  * Utility
    * 
  * Replay
    * 
* ETC
  
## Service Contents

* Initial Screen


* Play Mode


* Replay Mode


* Chat

* ETC

## Upcoming Work