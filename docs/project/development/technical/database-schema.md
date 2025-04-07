# **Database Schema: Carbon Print**

[← Back to Main Page](../../../index.md)

## **1. Collections**

### **1.1. Users**

Collection that stores user data, login credentials, and history of activity.

| Field           | Type       | Description                                                              |
|-----------------|------------|--------------------------------------------------------------------------|
| _id             | ObjectId   | Unique identifier for the user (Primary Key)                             |
| username        | String     | Unique username                                                          |
| email           | String     | User's email (also unique)                                               |
| cpf             | String     | User's CPF (also unique)                                                 |
| password        | String     | Hashed and salted password                                               |
| addess          | String     | User's CEP                                                               |
| phoneNumber     | String     | User's phone number                                                      |
| createdAt       | Date       | Date of account creation                                                 |
| lastLogin       | Date       | Last login timestamp (optional)                                         |
| role            | String     | User's role (e.g., `user`, `admin`) for permissions                      |
| wasteSaved      | Number     | Total waste saved by the user in kilograms (optional)                   |
| carbonCredit    | Number     | Total carbon credits earned by the user (optional)                      |
| totalPickups    | Number     | Total number of pickups completed by the user (optional)                |

**Note:** Could the user's CPF be used as the primary identifier?

**Authentication:**  
JWT tokens are issued upon successful login and used to authorize API requests.

---

### **1.2. Waste Collection**

Collection that stores information about waste registered for pickup.

| Field               | Type     | Description                                                              |
|---------------------|----------|--------------------------------------------------------------------------|
| _id                 | ObjectId | Unique identifier for the waste item (Primary Key)                       |
| userId              | ObjectId | Reference to the user who registered the waste (Foreign Key)             |
| type                | String   | Type of waste (e.g., `Metal`, `Plastic`)                                 |
| amount              | Number   | Amount of waste in kilograms                                             |
| comment             | String   | Optional comment from the user                                           |
| image               | String   | Image file path or URL                                                   |
| location            | GeoJSON  | Location details in GeoJSON format (latitude, longitude)                |
| status              | String   | Status of the waste (e.g., `registered`, `picked up`)                    |
| pickupScheduledAt   | Date     | Scheduled date and time for pickup                                       |

---

### **1.3. Pickups**

Collection that stores scheduled waste pickups and their progress.

| Field          | Type     | Description                                                                 |
|----------------|----------|-----------------------------------------------------------------------------|
| _id            | ObjectId | Unique identifier for the pickup (Primary Key)                              |
| wasteId        | ObjectId | Reference to the waste item being picked up (Foreign Key)                   |
| userId         | ObjectId | Reference to the user who registered the waste (Foreign Key)                |
| pickupBy       | ObjectId | Reference to the user who accepted the pickup (Foreign Key)                 |
| pickupStatus   | String   | Status of the pickup (e.g., `pending`, `completed`, `canceled`)             |
| confirmedAt    | Date     | Timestamp when the pickup was confirmed                                     |
| completedAt    | Date     | Timestamp when the pickup was completed                                     |

---

## **2. Relationships**

1. **Users ↔ Waste Collection:**
   - One user can register multiple waste items.
   - **One-to-many** relationship.

2. **Waste Collection ↔ Pickups:**
   - Each waste item is associated with a single pickup.
   - **One-to-one** relationship.

3. **Users ↔ Pickups:**
   - Users can act as both generators and collectors of waste.
   - **One-to-many** relationship (as pickup requesters or executors).

---

## **3. Example Entity-Relationship Diagram (ERD)**

```
  Users
  +---------------------------+
  | _id (PK)                  |
  | username                  |
  | email                     |
  | cpf                       |
  | ...                       |
  +---------------------------+
          |
          | 1
          |
          | N
  +---------------------------+
  | Waste Collection          |
  |---------------------------|
  | _id (PK)                  |
  | userId (FK)               |
  | type                      |
  | ...                       |
  +---------------------------+
          |
          | 1
          |
          | 1
  +---------------------------+
  | Pickups                   |
  |---------------------------|
  | _id (PK)                  |
  | wasteId (FK)              |
  | userId (FK)               |
  | pickupBy (FK)             |
  +---------------------------+
```

---

## **4. Field Explanations**

* **PK (Primary Key)** : Uniquely identifies each document in the collection.
* **FK (Foreign Key)** : References another collection’s primary field.

---

# Revision History

| Date       | Version | Changes                           | Authors |
| ---------- | ------- | --------------------------------- | ------- |
| 2025-03-28 | 0.1     | Document creation                 | [Cainã Freitas](https://github.com/freitasc) and [Lucas Antunes](https://github.com/LucasGSAntunes)        |
| 2025-04-06 | 0.2     | Add ecolink database schema               | [Mateus Vieira](https://github.com/matix0)|

[← Back to Main Page](../../../index.md)
