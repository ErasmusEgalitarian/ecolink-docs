### API Documentation: Content and User Management System

[← Back to Main Page](../../../index.md)

This documentation provides a comprehensive overview of the API for managing users, content, and subscriptions within the system.

---

## Base URL

The base URL for all API requests is:

```
https://api.example.com
```

---

## Authentication

All requests that require authentication must include a **Bearer token** in the `Authorization` header. The token is obtained after a successful login.

**Example:**

```plaintext
Authorization: Bearer <your-jwt-token>
```

---

## Endpoints

### 1. **User Management**

| Endpoint            | Method     | Description                             |
| ------------------- | ---------- | --------------------------------------- |
| `/api/register`   | `POST`   | Registers a new user (doctor/admin).    |
| `/api/login`      | `POST`   | Logs in a user and returns a JWT token. |
| `/api/users`      | `GET`    | Lists all users (Admin only).           |
| `/api/users/{id}` | `PUT`    | Edits a user profile.                   |
| `/api/users/{id}` | `DELETE` | Deletes a user.                         |

#### 1.1 User Registration

* **URL:** `/api/register`
* **Method:** `POST`
* **Description:** Registers a new user (doctor or administrator).
* **Request Body:**

  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "role": "doctor"
  }
  ```
* **Responses:**

  * **200 OK** : Successfully registered user.

  ```json
  {
    "message": "User registered successfully",
    "user": {
      "_id": "60c72b2f9b1d8f7f1e9e4f72",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "doctor"
    }
  }
  ```

  * **400 Bad Request** : Invalid input data.

  ```json
  {
    "error": "Invalid input data"
  }
  ```

#### 1.2 User Login

* **URL:** `/api/login`
* **Method:** `POST`
* **Description:** Logs in a user and returns a JWT token.
* **Request Body:**

  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```
* **Responses:**

  * **200 OK** : Login successful, JWT token returned.

  ```json
  {
    "message": "Login successful",
    "token": "your-jwt-token"
  }
  ```

  * **401 Unauthorized** : Incorrect credentials.

  ```json
  {
    "error": "Invalid credentials"
  }
  ```

#### 1.3 Get User List (Admin only)

* **URL:** `/api/users`
* **Method:** `GET`
* **Description:** Lists all users (Admin access required).
* **Response:**
  ```json
  [
    {
      "_id": "60c72b2f9b1d8f7f1e9e4f72",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "doctor"
    },
    {
      "_id": "60c72b2f9b1d8f7f1e9e4f73",
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "role": "administrator"
    }
  ]
  ```

#### 1.4 Edit User Profile

* **URL:** `/api/users/{id}`
* **Method:** `PUT`
* **Description:** Edits a user profile.
* **Request Body:**

  ```json
  {
    "name": "John Doe Updated",
    "email": "john.doe.updated@example.com"
  }
  ```
* **Response:**

  * **200 OK** : User updated successfully.

  ```json
  {
    "message": "User updated successfully",
    "user": {
      "_id": "60c72b2f9b1d8f7f1e9e4f72",
      "name": "John Doe Updated",
      "email": "john.doe.updated@example.com",
      "role": "doctor"
    }
  }
  ```

  * **400 Bad Request** : Invalid data provided.

  ```json
  {
    "error": "Invalid input data"
  }
  ```

#### 1.5 Delete User

* **URL:** `/api/users/{id}`
* **Method:** `DELETE`
* **Description:** Deletes a user.
* **Response:**

  * **200 OK** : User deleted successfully.

  ```json
  {
    "message": "User deleted successfully"
  }
  ```

  * **404 Not Found** : User not found.

  ```json
  {
    "error": "User not found"
  }
  ```

### 2. **Content Management**

| Endpoint                | Method     | Description             |
| ----------------------- | ---------- | ----------------------- |
| `/api/documents`      | `POST`   | Creates a new document. |
| `/api/documents`      | `GET`    | Lists all documents.    |
| `/api/documents/{id}` | `PUT`    | Edits a document.       |
| `/api/documents/{id}` | `DELETE` | Deletes a document.     |

#### 2.1 Create Document

* **URL:** `/api/documents`
* **Method:** `POST`
* **Description:** Creates a new document.
* **Request Body:**

  ```json
  {
    "title": "Medical Guidelines for COVID-19",
    "content": "Detailed content about COVID-19 prevention.",
    "topics": ["60c72b2f9b1d8f7f1e9e4f75"]
  }
  ```
* **Responses:**

  * **201 Created** : Document created successfully.

  ```json
  {
    "message": "Document created successfully",
    "document": {
      "_id": "60c72b2f9b1d8f7f1e9e4f76",
      "title": "Medical Guidelines for COVID-19",
      "content": "Detailed content about COVID-19 prevention.",
      "topics": ["60c72b2f9b1d8f7f1e9e4f75"]
    }
  }
  ```

  * **400 Bad Request** : Invalid input data.

  ```json
  {
    "error": "Invalid input data"
  }
  ```

#### 2.2 Get Documents List

* **URL:** `/api/documents`
* **Method:** `GET`
* **Description:** Lists all documents.
* **Response:**
  ```json
  [
    {
      "_id": "60c72b2f9b1d8f7f1e9e4f76",
      "title": "Medical Guidelines for COVID-19",
      "content": "Detailed content about COVID-19 prevention.",
      "topics": ["60c72b2f9b1d8f7f1e9e4f75"]
    }
  ]
  ```

#### 2.3 Edit Document

* **URL:** `/api/documents/{id}`
* **Method:** `PUT`
* **Description:** Edits an existing document.
* **Request Body:**

  ```json
  {
    "title": "Updated Medical Guidelines for COVID-19",
    "content": "Updated content about COVID-19 prevention."
  }
  ```
* **Response:**

  * **200 OK** : Document updated successfully.

  ```json
  {
    "message": "Document updated successfully",
    "document": {
      "_id": "60c72b2f9b1d8f7f1e9e4f76",
      "title": "Updated Medical Guidelines for COVID-19",
      "content": "Updated content about COVID-19 prevention."
    }
  }
  ```

  * **400 Bad Request** : Invalid data provided.

  ```json
  {
    "error": "Invalid input data"
  }
  ```

#### 2.4 Delete Document

* **URL:** `/api/documents/{id}`
* **Method:** `DELETE`
* **Description:** Deletes a document.
* **Response:**

  * **200 OK** : Document deleted successfully.

  ```json
  {
    "message": "Document deleted successfully"
  }
  ```

  * **404 Not Found** : Document not found.

  ```json
  {
    "error": "Document not found"
  }
  ```

[← Back to Main Page](../../../index.md)
