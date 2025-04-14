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

| #     | Description                                                                                                                                                                                                                                                                       |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FR-00 | Media upload [System must allow the user to upload video (MP4, webM) and image files(PNG, JPEG, SVG)]                                                                                                                                                                             |
| FR-01 | Data editing [The system must allow adding/editing of metadata for uploaded media]                                                                                                                                                                                                |
| FR-02 | User Registration [The system must allow three types of users to register: administrators, students, and external users. Each user type will provide the necessary details for registration, such as personal information and academic data for students for incentive tracking.] |
| FR-03 | Ecopoint Location [The system must provide users with the ability to locate nearby Ecopoints using geolocation services.]                                                                                                                                                         |
| FR-04 | User Feedback [The system must allow users to provide feedback on the app’s usability and content for continuous improvement.]                                                                                                                                                    |


---

## **2. Non-Functional Requirements**

> Specifies **quality attributes** for performance, security, usability, scalability, etc. — how the system must perform the functions.

| #      | Type             | Description                                                                                                                                                                                                                                                            |
| ------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NFR-00 | **Scalability**  | [The system must support multiple simultaneous uploads with no issues in performance]                                                                                                                                                                                  |
| NFR-01 | **Usability**    | The application must use a color palette consistent with the project, ensuring a cohesive user experience. The colors should be selected to optimize readability and ensure adequate contrast for users with visual impairments, meeting WCAG 2.1 level AA guidelines. |
| NFR-02 | **Availability** | The system must ensure 99.9% availability throughout each month.                                                                                                                                                                                                       |
| NFR-03 | **Perfomance**   | The system’s home page must load in less than 3 seconds on 4G or better networks.                                                                                                                                                                                      |
| NFR-04 | **Scalability**  | The system must allow the addition of new modules transparently, without impacting existing modules.                                                                                                                                                                   |
| NFR-05 | **Security**     | The system must ensure encryption of sensitive data using the AES 256-bit protocol.                                                                                                                                                                                    |

---

## **3. Themes**

> **Themes** group major system areas under broad topics.

| #     | Theme         | Description                             |
| ----- | ------------- | --------------------------------------- |
| TM-00 | [Theme Name]  | [High-level area description]           |

---

## **4. Epics**

> **Epics** define **major features** that contribute to system development.

| #     | Epic             | Description                                 |
| ----- | ---------------- | ------------------------------------------- |
| EP-00 | [Epic Title]     | [High-level functional overview]            |

---

## **5. Capabilities**

> **Capabilities** describe the system's **technical abilities** that support key functionalities.

| #    | Capability         | Description                                   |
| ---- | ------------------ | --------------------------------------------- |
| C-00 | [Capability Name]  | [Description of system’s technical ability]   |

---

## **6. Features**

> **Features** define the **specific functionalities** to implement each capability.

| #    | Feature             | Description                                          |
| ---- | ------------------- | ---------------------------------------------------- |
| F-00 | [Feature Name]      | [Detailed description of the required functionality] |

---

## **7. User Stories**

> **User stories** describe how users interact with the system in real-world scenarios.

| #     | Description                                                              |
| ----- | ------------------------------------------------------------------------ |
| US-00 | As a [user type], I want [action] so that [benefit or purpose].          |

---

## **8. Backlog**

The project backlog is a structured list of all tasks, features, and improvements planned. It guides development priorities and serves as the foundation for MVP scope selection.

| Theme | Epic   | Capabilities | Features | User Story | Description                                                    |
|-------|--------|--------------|----------|------------|----------------------------------------------------------------|
| TM00  | EP00   | C00          | F00      | US00       | As a [user], I want [functionality] so that [benefit].         |

---

## Revision History

| Date       | Version | Changes           | Authors  |
| ---------- | ------- | ----------------- | -------- |
| 2025-03-28 | 0.1     | Document creation | [Cainã Freitas](https://github.com/freitasc) and [Lucas Antunes](https://github.com/LucasGSAntunes) |

[← Back to Main Page](../../index.md)
