# Architecture

[← Back to Main Page](../../../index.md)

## Introduction

This architecture document outlines the structure and core components of the content and user management system, focusing on the features and requirements defined in the project backlog. The architecture is designed to be scalable, modular, and easy to maintain, aiming to meet the MVP's needs and evolve as the product grows.

## System Overview

The system's primary goal is to enable the management of users and content for doctors and administrators, including user registration, authentication, profile management, and document and subscription management.

### **Technologies Used**

| Technology               | Description                                                |
| ------------------------ | ---------------------------------------------------------- |
| **Backend**        | Node.js with Express                                       |
| **Database**       | MongoDB (for storing user and content data)                |
| **Authentication** | JWT (JSON Web Tokens) for authentication and authorization |
| **Frontend**       | Vue.js (for the admin interface)                           |
| **Notifications**  | Service Worker and Firebase for push notifications         |

## Component Architecture

### 1. **User Management (EP01)**

Responsible for creating, editing, deleting, and authenticating users (doctors and administrators). Key features include:

| Feature                                   | Description                                                                                     |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **User Registration (F01)**         | Creating accounts for doctors and administrators.                                               |
| **Login (F05)**                     | Authenticating users with credentials and generating a JWT token.                               |
| **Profile Editing (F04)**           | Allowing users to edit their profile, such as resetting passwords or updating personal details. |
| **User Search and Listing (F02)**   | Administrators can search and list registered users.                                            |
| **User Editing and Deletion (F03)** | Functionality for managing registered users, correcting or removing incorrect data.             |

### 2. **Content Management (EP01)**

Involves creating and managing documents, topics, and materials accessed by users.

| Feature                                       | Description                                                     |
| --------------------------------------------- | --------------------------------------------------------------- |
| **Document Creation and Listing (F06)** | Administrators can create new documents and view existing ones. |
| **Document Editing and Deletion (F07)** | Functionality to update or remove outdated documents.           |
| **Topics (F06)**                        | Allows for creating and listing topics related to documents.    |

### 3. **Subscription and Notifications Management (EP02)**

Responsible for managing doctors' subscriptions and sending notifications.

| Feature                                 | Description                                                                 |
| --------------------------------------- | --------------------------------------------------------------------------- |
| **Subscription Management (F12)** | Allows doctors to access their financial area to manage their subscription. |

### 4. **Authentication and Authorization**

Authentication will be handled using JWT. Upon logging in, a user will receive a token granting access to the system's functionalities. Tokens will be validated to ensure that the user is authorized to access requested data and resources.

### 5. **Architecture Layers**

The architecture follows the MVC (Model-View-Controller) pattern:

| Layer                | Description                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Model**      | Represents the data structure. User and document models are stored in the MongoDB database.                                          |
| **View**       | The user interface, built with Vue.js, displays information and interacts with the user to capture data.                             |
| **Controller** | Manages business logic and interacts with the models. Example: The user controller manages registration, login, and profile editing. |

### 6. **Data Flow and Frontend Integration**

The data flow follows a RESTful structure. The frontend application built with Vue.js makes calls to the backend REST APIs (Node.js + Express). The backend interacts with the MongoDB database to read and write data.

#### Example Endpoints:

| HTTP Method | Endpoint            | Description                                  |
| ----------- | ------------------- | -------------------------------------------- |
| `POST`    | `/api/register`   | Create a new user (doctor or administrator). |
| `POST`    | `/api/login`      | User login.                                  |
| `GET`     | `/api/users`      | List users (admin only).                     |
| `PUT`     | `/api/users/{id}` | Edit user.                                   |
| `DELETE`  | `/api/users/{id}` | Delete user.                                 |

### 7. **Security**

Security is a priority to ensure that only authenticated and authorized users can access sensitive data.

| Security Feature         | Description                                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Encryption**     | Passwords will be securely stored using the bcrypt hashing algorithm.                                                                         |
| **JWT Tokens**     | Authentication will be managed with JWT tokens, which will have an expiration time, requiring users to log in again after a certain period.   |
| **Access Control** | The system will allow different levels of access, with only administrators able to perform user and document creation, editing, and deletion. |

## Data Models

### User Model

```json
{
  "_id": "objectId",
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "doctor | administrator",
  "registrationDate": "date",
  "status": "active | inactive"
}
```

### Document Model

```json
{
  "_id": "objectId",
  "title": "string",
  "content": "string",
  "topics": ["objectId"],
  "creationDate": "date",
  "updateDate": "date",
  "status": "active | inactive"
}
```

### Topic Model

```json
{
  "_id": "objectId",
  "title": "string",
  "description": "string",
  "documentId": "objectId"
}
```

## Feature Implementation

### Feature F01 - User Registration

* **Description:** The doctor or administrator registers on the system with basic information such as name, email, and password.
* **Process:** The user fills out a registration form. The backend validates the information, and if everything is correct, a new user is created in the database.

### Feature F05 - User Login

* **Description:** Allows doctors and administrators to log in using their email and password.
* **Process:** The user submits their credentials, which are validated by the system. If valid, a JWT token is generated and sent to the frontend.

### Feature F12 - Subscription Management

* **Description:** The doctor can access their financial area to manage their subscription.
* **Process:** The backend retrieves the doctor's financial information and displays the details on the frontend.

# Revision History

| Date       | Version | Changes                           | Authors |
| ---------- | ------- | --------------------------------- | ------- |
| 2025-03-28 | 0.1     | Document creation                 | [Cainã Freitas](https://github.com/freitasc) and [Lucas Antunes](https://github.com/LucasGSAntunes)        |

[← Back to Main Page](../../../index.md)
