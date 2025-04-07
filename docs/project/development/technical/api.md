### API Documentation: Ecolink

[← Back to Main Page](../../../index.md)

This documentation provides a comprehensive overview of the API for managing users, waste submissions, and pickups.

---

## Endpoints

### 1. **User Management**

| Endpoint            | Method     | Description                             |
| ------------------- | ---------- | --------------------------------------- |
| `/api/register`     | `POST`     | Registers a new user.                   |
| `/api/login`        | `POST`     | Logs in a user and returns a JWT token. |
| `/api/user/dashboard` | `GET`    | Retrieves user statistics.              |

#### 1.1 User Registration

* **URL:** `/api/register`
* **Method:** `POST`
* **Description:** Registers a new user.
* **Request Body:**

```json
{
  "email": "user@example.com",
  "password": "userpassword123",
  "name": "John Doe",
  "cpf": "123.456.789-00"
}
```
* **Responses:**

  * **201 Created**
  ```json
  {
    "message": "User registered successfully",
    "userId": "uniqueUserId"
  }
  ```

  * **400 Bad Request**
  ```json
  {
    "error": "Invalid input or missing fields"
  }
  ```

#### 1.2 User Login

* **URL:** `/api/login`
* **Method:** `POST`
* **Description:** Logs in a user and returns a JWT token.
* **Request Body:**

```json
{
  "email": "user@example.com",
  "password": "userpassword123"
}
```
* **Responses:**

  * **200 OK**
  ```json
  {
    "message": "Login successful",
    "token": "jwt_token_string"
  }
  ```

  * **401 Unauthorized**
  ```json
  {
    "error": "Invalid credentials"
  }
  ```

#### 1.3 User Dashboard

* **URL:** `/api/user/dashboard`
* **Method:** `GET`
* **Description:** Retrieves user statistics.
* **Response:**

```json
{
  "wasteSaved": 150.5,
  "carbonCredits": 200,
  "totalPickups": 50
}
```

---

### 2. **Waste Management**

| Endpoint                | Method     | Description                       |
| ----------------------- | ---------- | --------------------------------- |
| `/api/waste/register`   | `POST`     | Registers a new waste item.       |
| `/api/waste/list`       | `GET`      | Retrieves all waste items.        |
| `/api/waste/{id}`       | `PUT`      | Updates a waste item.             |
| `/api/waste/{id}`       | `DELETE`   | Deletes a waste item.             |

#### 2.1 Register Waste

* **URL:** `/api/waste/register`
* **Method:** `POST`
* **Description:** Registers a new waste item.
* **Request Body:**

```json
{
  "id": "uniqueWasteId",
  "user": "userId",
  "type": "plastic",
  "description": "plastic bottles",
  "photos": "base64encodedimage",
  "location": [-47.9292, -15.7801]
}
```
* **Responses:**

  * **201 Created**
  ```json
  {
    "message": "Waste registered successfully",
    "wasteId": "uniqueWasteId"
  }
  ```

  * **400 Bad Request**
  ```json
  {
    "error": "Invalid input or missing fields"
  }
  ```

#### 2.2 Get Waste List

* **URL:** `/api/waste/list`
* **Method:** `GET`
* **Description:** Retrieves all waste items.
* **Response:**

```json
[
  {
    "wasteId": "uniqueWasteId",
    "type": "metal",
    "amount": 10,
    "description": "a bag of aluminum cans",
    "location": { "type": "Point", "coordinates": [-47.9292, -15.7801] },
    "status": "registered"
  }
]
```

#### 2.3 Update Waste

* **URL:** `/api/waste/{id}`
* **Method:** `PUT`
* **Description:** Updates a waste item.
* **Request Body:**

```json
{
  "user": "userId",
  "type": "metal",
  "description": "a bag of aluminum cans",
  "photos": "base64encodedimage",
  "location": {
    "type": "Point",
    "coordinates": [-47.9201, -15.7802]
  }
}
```
* **Response:**

```json
{
  "message": "Waste details updated successfully"
}
```

#### 2.4 Delete Waste

* **URL:** `/api/waste/{id}`
* **Method:** `DELETE`
* **Description:** Deletes a waste item.
* **Response:**

```json
{
  "message": "Waste removed successfully"
}
```

---

### 3. **Pickup Management**

| Endpoint           | Method     | Description                     |
| ------------------ | ---------- | ------------------------------- |
| `/api/pickup`      | `POST`     | Creates a new pickup.           |
| `/api/pickup`      | `GET`      | Retrieves all pickups.          |
| `/api/pickup/{id}` | `GET`      | Retrieves a pickup by ID.       |
| `/api/pickup/{id}` | `PUT`      | Updates a pickup.               |
| `/api/pickup/{id}` | `DELETE`   | Deletes a pickup.               |

#### 3.1 Create Pickup

* **URL:** `/api/pickup`
* **Method:** `POST`
* **Description:** Creates a new pickup.
* **Request Body:**

```json
{
  "wasteId": "uniqueWasteId",
  "userId": "uniqueUserId",
  "pickupBy": "pickupPersonId",
  "pickupStatus": "pending",
  "confirmedAt": "2024-12-20T10:00:00Z",
  "completedAt": "2024-12-25T15:30:00Z"
}
```
* **Response:**

```json
{
  "message": "Pickup created successfully",
  "data": { "id": "uniquePickupId" }
}
```

#### 3.2 Get Pickups

* **URL:** `/api/pickup`
* **Method:** `GET`
* **Description:** Retrieves all pickups.
* **Response:**

```json
{
  "message": "Pickups retrieved successfully",
  "data": [ { "id": "uniquePickupId" } ]
}
```

#### 3.3 Get Pickup by ID

* **URL:** `/api/pickup/{id}`
* **Method:** `GET`
* **Description:** Retrieves a pickup by ID.
* **Response:**

```json
{
  "message": "Pickup retrieved successfully",
  "data": {
    "id": "uniquePickupId"
  }
}
```

#### 3.4 Update Pickup

* **URL:** `/api/pickup/{id}`
* **Method:** `PUT`
* **Description:** Updates a pickup.
* **Request Body:**

```json
{
  "pickupStatus": "completed",
  "completedAt": "2024-12-25T15:30:00Z"
}
```
* **Response:**

```json
{
  "message": "Pickup updated successfully",
  "data": { "id": "uniquePickupId" }
}
```

#### 3.5 Delete Pickup

* **URL:** `/api/pickup/{id}`
* **Method:** `DELETE`
* **Description:** Deletes a pickup.
* **Response:**

```json
{
  "message": "Pickup deleted successfully"
}
```

---
| Date       | Version | Changes                           | Authors |
| ---------- | ------- | --------------------------------- | ------- |
| 2025-03-28 | 0.1     | Document creation                 | [Cainã Freitas](https://github.com/freitasc) and [Lucas Antunes](https://github.com/LucasGSAntunes)        |
| 2025-04-06 | 0.2     | Add ecolink 2024.2 api                 | [Mateus Vieira](https://github.com/matix0)|

[← Back to Main Page](../../../index.md)
