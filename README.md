# Photo Service

The Photo service is a Web Application used for take a photo using camera through browser to persist on database and show for evaluation.

## Installing / Getting started

In order to compile the Photo Service run this command within the CLI.

```shell
cd photo-service/backend
mvnw clean install
mvnw spring-boot:run
```
Frontend
```shell
cd photo-service/frontend
npm install
```

To start the example app run the following commands and open http://localhost:8080/photo-service

## Requirement

### MySQL Database connection

In order to create a database a MySQL 5.7.x installation is required. After that, open a terminal (command prompt in Microsoft Windows) and open a MySQL client as a user who can create new users. For example, use the following command:

```shell
mysql -u root -p
```

This connects to MySQL as ```root``` and allows access to the user from all hosts. This is __not the recommended way__ for a production server.

To create a new database, run the following commands at the ```mysql``` prompt:

```shell
mysql> create database photo_service; -- Creates the new database
mysql> create user 'desenv'@'%' identified by 'desenv@2021'; -- Creates the user
mysql> grant all on photo_service.* to 'desenv'@'%'; -- Gives all privileges to the new user on the newly created database
```

## Developing

In order to start developing to the project further:

```shell
git clone https://github.com/Andoliv/photo-service.git
cd photo-service/backend
mvnw clean install
mvnw spring-boot:run
```
Frontend
```shell
cd photo-service/frontend
npm serve
```

### Deploying / Publishing

In order to build and run the project

```shell
mvnw clean package 
cd backend/
java -jar target/backend-[VERSION].jar
```
Frontend
```shell
cd photo-service/frontend
npm serve
```

To start the example app run the following commands and open http://localhost:8080/photo-service

## Links

Useful Links:

- Repository: https://github.com/Andoliv/photo-service