# ECOMM API with MongoDB

This project implements an e-commerce platform API that uses MongoDB as the database and follows the Repository pattern. The `UserService` and `ProductService` are set up to manage user and product data respectively.

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)  
  - [Prerequisites](#prerequisites) 
- [API Endpoints](#api-endpoints)
  - [Products](#products)
    - [POST /products](#post-products)
    - [GET /products](#get-products)
  - [Users](#users)
    - [POST /users](#post-users)
    - [GET /users](#get-users)
- [Configuration](#configuration)
- [MongoDB Context](#mongodb-context)
- [Repository Pattern](#repository-pattern) 

## Overview

The **ECOMM API** allows you to manage products and users in a MongoDB database. The project follows best practices by using the **Repository pattern** for separating the data access layer and making the code more testable and maintainable.

## Technologies

- ASP.NET Core
- MongoDB
- Repository Pattern
- Dependency Injection
 

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [MongoDB](https://www.mongodb.com/try/download/community)


## API Endpoints

### Products

#### POST /products

- **Description:** Adds a new product to the inventory.
- **Request URL:** `/products`
- **Method:** `POST`
- **Request Body:**
```json
 { 
    "createdDate": "2024-10-07T11:24:30.991Z",
    "productName": "Boke",
    "description": "MY BIke old 10 years",
    "price": 1500,
    "availableQuantity": "1"
  } 
```

#### GET /products

- **Description:** Retrieves a list of all products.
- **Request URL:** `/products`
- **Method:** `GET` 
```json
[
  {
    "id": "XXXXXXXXXXXXXX",
    "createdDate": "2024-10-07T11:24:30.991Z",
    "productName": "Boke",
    "description": "MY BIke old 10 years",
    "price": 1500,
    "availableQuantity": "1"
  }
]
```


#### POST /Users

- **Description:** Adds a new users.
- **Request URL:** `/users`
- **Method:** `POST`
- **Request Body:**
```json
{
    "createdDate": "2024-10-07T11:23:37.080Z",
    "firstName": "John",
    "lastName": "doe",
    "email": "john.doe@example.com",
    "contactNo": "9876543210"
}
```

#### GET /Users

- **Description:** Retrieves a list of all users.
- **Request URL:** `/users`
- **Method:** `GET` 
```json
 [
  {
    "id": "XXXXXXXXXXXX",
    "createdDate": "2024-10-07T11:23:37.080Z",
    "firstName": "John",
    "lastName": "doe",
    "email": "john.doe@example.com",
    "contactNo": "9876543210"
  }
]
```


## Configuration
Make sure you update your appsettings.json file with the correct MongoDB connection string and database name.

```json
 {
  "ConnectionStrings": {
    "MongoDb": "your_mongodb_connection_string",
    "DatabaseName": "your_database_name"
  }
}
```

### MongoDB Context
The MongoDbContext class is responsible for managing the connection to the MongoDB database.  

### Repository Pattern
This project uses the Repository pattern to separate business logic from data access logic. 
