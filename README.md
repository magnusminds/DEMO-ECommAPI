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
    "name": "Product Name",
    "description": "Product Description",
    "price": 29.99,
    "category": "Category Name",
    "stock": 100
  }
```

#### GET /products

- **Description:** Retrieves a list of all products.
- **Request URL:** `/products`
- **Method:** `GET` 
```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 29.99,
    "category": "Category Name",
    "stock": 100
  }
```


#### POST /Users

- **Description:** Adds a new users.
- **Request URL:** `/users`
- **Method:** `POST`
- **Request Body:**
```json
 {
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "password": "securepassword",
  "role": "customer"
}
```

#### GET /Users

- **Description:** Retrieves a list of all users.
- **Request URL:** `/users`
- **Method:** `GET` 
```json
 [
  {
    "id": "67890",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "role": "customer",
    "created_at": "2024-10-07T12:10:00Z"
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