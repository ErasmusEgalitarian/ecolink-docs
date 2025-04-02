
# **Database Schema**

[← Back to Main Page](../../../index.md)

## **1. Tables**

### **1.1. Users**

Table that stores information about system users, such as doctors and administrators.

| Column     | Type         | Description                                     |
| ---------- | ------------ | ----------------------------------------------- |
| id         | UUID         | Unique identifier for the user (Primary Key)    |
| name       | VARCHAR(255) | User's name                                     |
| email      | VARCHAR(255) | Unique email for the user (Unique Key)          |
| password   | VARCHAR(255) | User's encrypted password                       |
| role       | ENUM         | User's role (e.g.,`doctor`,`administrator`) |
| created_at | TIMESTAMP    | Record creation date                            |
| updated_at | TIMESTAMP    | Last record update date                         |

### **1.2. Documents**

Table that stores information about documents registered in the system.

| Column     | Type         | Description                                                             |
| ---------- | ------------ | ----------------------------------------------------------------------- |
| id         | UUID         | Unique identifier for the document (Primary Key)                        |
| title      | VARCHAR(255) | Document title                                                          |
| content    | TEXT         | Document content                                                        |
| created_by | UUID         | User ID who created the document (Foreign Key referencing `Users.id`) |
| created_at | TIMESTAMP    | Document creation date                                                  |
| updated_at | TIMESTAMP    | Last document update date                                               |

### **1.3. Topics**

Table that stores topics related to documents.

| Column     | Type         | Description                                   |
| ---------- | ------------ | --------------------------------------------- |
| id         | UUID         | Unique identifier for the topic (Primary Key) |
| name       | VARCHAR(255) | Topic name                                    |
| created_at | TIMESTAMP    | Topic creation date                           |
| updated_at | TIMESTAMP    | Last topic update date                        |

### **1.4. Document_Topics (Relational)**

Intermediate table that associates documents and topics, allowing a document to have multiple topics.

| Column      | Type | Description                                            |
| ----------- | ---- | ------------------------------------------------------ |
| document_id | UUID | Document ID (Foreign Key referencing `Documents.id`) |
| topic_id    | UUID | Topic ID (Foreign Key referencing `Topics.id`)       |

### **1.5. Subscription**

Table that stores information about doctors' subscriptions.

| Column     | Type      | Description                                          |
| ---------- | --------- | ---------------------------------------------------- |
| id         | UUID      | Unique identifier for the subscription (Primary Key) |
| doctor_id  | UUID      | Doctor ID (Foreign Key referencing `Users.id`)     |
| start_date | TIMESTAMP | Subscription start date                              |
| end_date   | TIMESTAMP | Subscription end date                                |
| status     | ENUM      | Subscription status (e.g.,`active`,`inactive`)   |
| created_at | TIMESTAMP | Subscription creation date                           |
| updated_at | TIMESTAMP | Last subscription update date                        |

## **2. Relationships**

1. **Users ↔ Documents:**
   * A **user** (doctor or administrator) can create multiple  **documents** , but each document is created by a single user.
   * **One-to-many** relationship between `Users` and `Documents`.
2. **Documents ↔ Topics:**
   * A **document** can be associated with multiple  **topics** , and a **topic** can be associated with multiple  **documents** .
   * **Many-to-many** relationship between `Documents` and `Topics`, resolved by the intermediate table `Document_Topics`.
3. **Users ↔ Subscription:**
   * A **user** (doctor) can have a single  **subscription** , but a subscription is linked to only one  **user** .
   * **One-to-one** relationship between `Users` and `Subscription` (for doctors).

## **3. Example Entity-Relationship Diagram (ERD)**

```
  Users
  +-------------------------+
  | id (PK)                 |
  | name                    |
  | email                   |
  | password                |
  | role                    |
  | created_at              |
  | updated_at              |
  +-------------------------+
         |
         | 1
         | 
         | N
   +-------------------------+
   | Documents               |
   |-------------------------|
   | id (PK)                 |
   | title                   |
   | content                 |
   | created_by (FK)         |
   | created_at              |
   | updated_at              |
   +-------------------------+
         |
         | N
         |
   +-------------------------+
   | Document_Topics         |
   |-------------------------|
   | document_id (FK)        |
   | topic_id (FK)           |
   +-------------------------+
         |
         | N
         |
   +-------------------------+
   | Topics                  |
   |-------------------------|
   | id (PK)                 |
   | name                    |
   | created_at              |
   | updated_at              |
   +-------------------------+
   
   +-------------------------+
   | Subscription            |
   |-------------------------|
   | id (PK)                 |
   | doctor_id (FK)          |
   | start_date              |
   | end_date                |
   | status                  |
   | created_at              |
   | updated_at              |
   +-------------------------+
```

## **4. Field Explanations**

* **PK (Primary Key)** : Primary key, used to uniquely identify a record.
* **FK (Foreign Key)** : Foreign key, used to establish a relationship with another table.

# Revision History

| Date       | Version | Changes                           | Authors |
| ---------- | ------- | --------------------------------- | ------- |
| 2025-03-28 | 0.1     | Document creation                 | [Cainã Freitas](https://github.com/freitasc) and [Lucas Antunes](https://github.com/LucasGSAntunes)        |

[← Back to Main Page](../../../index.md)
