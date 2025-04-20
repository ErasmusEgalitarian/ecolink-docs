# Product Backlog Building

[← Back to Main Page](../../index.md)

## Guide to Reviewing This Documentation

This document outlines the **functional and non-functional requirements** for **Ecolink**, which integrates **a hardware-connected scale, an API, and a mobile application**. The documentation follows a structured approach to ensure clarity and completeness.

### **How to Use This Documentation**

- **Functional Requirements (FR-00)** – Key capabilities the system must implement.
- **Non-Functional Requirements (NFR-00)** – Quality attributes ensuring system performance, security, and usability.
- **Themes (TM-00)** – High-level system areas grouping functionalities.
- **Epics (EP-00)** – Major features that contribute to the system’s development.
- **Capabilities (C-00)** – The abilities the system must support.
- **Features (F-00)** – Specific technical functionalities fulfilling each capability.
- **User Stories (US-00)** – Individual use cases defining how users interact with the system.
- **Backlog** – A detailed, structured representation of all functionalities (to be built once all topics are mapped).

Each section follows a progressive breakdown of the system’s structure, from high-level requirements to detailed functionalities.  
Nothing in this document is final; please suggest corrections or improvements.

---

## **1. Functional Requirements**

> Defines the system's **core functionalities** — what the system must do.

| #     | Description                               |
| ----- | ----------------------------------------- |
| FR-00 | [Describe a core system functionality]    |
| FR-01 | 	The system must allow users to  log in using email and password.    |
| FR-02 | 	The system must validate the user credentials via API.    |
| FR-03 | 	The system must provide an error for failed login attempts.    |

---

## **2. Non-Functional Requirements**

> Specifies **quality attributes** for performance, security, usability, scalability, etc. — how the system must perform the functions.

| #      | Type        | Description                                 |
| ------ | ----------- | ------------------------------------------- |
| NFR-00 | [Type]      | [Describe the quality expectation]          |
| NFR-01 | Performance      | The login must take no more than 2 seconds to successfully log in the user.          |

---

## **3. Themes**

> **Themes** group major system areas under broad topics.

| #     | Theme         | Description                             |
| ----- | ------------- | --------------------------------------- |
| TM-00 | [Theme Name]  | [High-level area description]           |
| TM-01 | Auth  | This theme is related to login and logout to/from the system.           |

---

## **4. Epics**

> **Epics** define **major features** that contribute to system development.

| #     | Epic             | Description                                 |
| ----- | ---------------- | ------------------------------------------- |
| EP-00 | [Epic Title]     | [High-level functional overview]            |
| EP-01 | Login     | This epic is related to the user login into the system.           |

---

## **5. Capabilities**

> **Capabilities** describe the system's **technical abilities** that support key functionalities.

| #    | Capability         | Description                                   |
| ---- | ------------------ | --------------------------------------------- |
| C-00 | [Capability Name]  | [Description of system’s technical ability]   |
| C-01 | Security  | The system should be able to securely log in an user and store his credentials and tokens securely.  |

---

## **6. Features**

> **Features** define the **specific functionalities** to implement each capability.

| #    | Feature             | Description                                          |
| ---- | ------------------- | ---------------------------------------------------- |
| F-00 | [Feature Name]      | [Detailed description of the required functionality] |
| F-01 | Login page (web)      | A login responsive webpage that asks for user credentials should be implemented. |
| F-02 | API login endpoint      | A login endpoint on the backend should be implemented. |
| F-03 | Web UI and backend integration     | Both systems should be properly integrated between each other. |

---

## **7. User Stories**

> **User stories** describe how users interact with the system in real-world scenarios.

| #     | Description                                                              |
| ----- | ------------------------------------------------------------------------ |
| US-00 | As a [user type], I want [action] so that [benefit or purpose].          |
| US-01 | As a user, I want to login on the system so that I can access specific data.          |
| US-02 | As a user, I want to have my credentials securely handled so that I can trust the system.          |
| US-03 | As a user, I want the website to be responsive so I can access it through multiple devices, such as smartphones and tablets.      |
| US-04 | As a user, I want proper error and exception handling on the login/logout system so I can transparently understand what's happening when something goes wrong.      |

---

## **8. Backlog**

The project backlog is a structured list of all tasks, features, and improvements planned. It guides development priorities and serves as the foundation for MVP scope selection.

| Theme | Epic   | Capabilities | Features | User Story | Description                                                    |
|-------|--------|--------------|----------|------------|----------------------------------------------------------------|
| TM00  | EP00   | C00          | F00      | US00       | As a [user], I want [functionality] so that [benefit].         |
| TM01  | EP01   | C01          | F01      | US01       | As a user, I want to log in using my credentials so that I can access specific data to my account.
| TM01  | EP01   | C01          | F02      | US02       | As a user, I want my credentials properly handled so I can securely use the system.
| TM01  | EP01   | C01          | F03      | US03       | As a user, I want the website to be responsive so I can access it through multiple different devices.
| TM01  | EP01   | C01          | F03      | US04       | As a user, I want proper error/exception handling so I can have a transparent view of what's happening on the system.

---

## Revision History

| Date       | Version | Changes           | Authors  |
| ---------- | ------- | ----------------- | -------- |
| 2025-03-28 | 0.1     | Document creation | [Cainã Freitas](https://github.com/freitasc) and [Lucas Antunes](https://github.com/LucasGSAntunes) |
| 2025-04-20 | 0.2     | Added login features, epics, user stories and backlog | [Eduardo F. Aquino](https://github.com/fxred)|

[← Back to Main Page](../../index.md)
