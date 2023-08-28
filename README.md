# Project: Candidate Management System Task

Welcome to the Candidate Management System project! This project involves the design and development of a system to manage candidate profiles. 
It includes the implementation of UI pages, REST API endpoints, and integration with external services.

## Table of Contents

- [Live Demo](#video)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)


## video

https://www.loom.com/share/df40c0e6af9646f893bbf1350f9a3a74?sid=dcf2c73e-e898-4680-9a07-eee63a29dcc5

## Getting Started

To get the project up and running, follow these steps:

1. Clone the repository.
```
https://github.com/prakash-aathi/deal-vps-task.git
```
2, To run the backend navigate 
```
cd backend/radaptive
```
3, Make sure you have added valid credentials replaced in application properties [Mysql & radaptive] credentials
```
spring.datasource.username= YOUR MYSQL USERNAME
spring.datasource.password= YOUR MYSQL PASSWORD
userId= RADAPTIVE USERNAME
password=  RADAPTIVE PASSWORD
```
4, To run
```
mvn clean install
```
```
mvn spring-boot:run
```
5, To start frontend navigate 
```
cd frontend
```
6, To start application
```
npm install
```
```
npm start
```

## Project Structure

The project structure is organized as follows:

- `backend`: Contains the SpringBoot application code.
- `frontend`: Contains the ReactJS application code.

