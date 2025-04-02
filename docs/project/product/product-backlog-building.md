# Product Backlog Building

[← Back to Main Page](../../index.md)

## Guide to Reviewing This Documentation

This document outlines the **functional and non-functional requirements** for the **Data Management System**, which integrates **a hardware-connected scale, an API, and a mobile application**. The documentation follows a structured approach to ensure clarity and completeness.

### **How to Use This Documentation**

- **Functional Requirements (FR-00)** - The key capabilities the system must implement.
- **Non-Functional Requirements (NFR-00)** - The quality attributes ensuring system performance, security, and usability.
- **Themes (TM-00)** - High-level system areas grouping functionalities.
- **Epics (EP-00)** - Major features that contribute to the system’s development.
- **Capabilities (C-00)** - The abilities the system must support.
- **Features (F-00)** - Specific technical functionalities fulfilling each capability.
- **User Stories (US-00)** - Individual use cases defining how users interact with the system.
- **Backlog** - A detailed, structured representation of all functionalities. (After have all topics, we can construct that)

Each section follows a progressive breakdown of the system’s structure, from high-level requirements to detailed functionalities.
Nothing in this document is set in stone; if you notice an error, please discuss it with the team.
---

## **1. Functional Requirements**

> Defines the system's **core functionalities**.
> What the system must do

| #     | Description                                                          |
| ----- | -------------------------------------------------------------------- |
| FR-01 | The system must have a **hardware-integrated scale prototype**. |
| FR-02 | The system must have an **API**.                                |
| FR-03 | The system must have a **mobile application (APP)**.            |
| FR-04 | The system must align with the **Implementation Guide**.        |

(Additional functional requirements …)

---

## **2. Non-Functional Requirements**

> Specifies **quality attributes** that ensure the system meets expectations for **performance, security, usability, scalability, etc**...
> How the system must do functional requirements

| #      | Type        | Description                                                                                 |
| ------ | ----------- | ------------------------------------------------------------------------------------------- |
| NFR-01 | Reliability | The**scale must be resistant** to environmental conditions (dust, moisture, impact).  |
| NFR-02 | Performance | The**API must process weight data in real-time** with minimal latency.                |
| NFR-03 | Usability   | The APP must be**easy to use** for waste pickers with **low digital literacy**. |
| NFR-04 | Scalability | The system must be able to**support multiple cooperative centers**.                   |
| NFR-05 | Security    | The API must ensure**secure authentication** for users.                               |
| NFR-06 | Reliability | The**scale must accurately weigh** the collected material.                            |

(Additional non-functional requirements …)

---

## **3. Themes**

> **Themes** categorize **major system areas**, grouping functionalities under broad topics.

| #     | Theme                     | Description                                                   |
| ----- | ------------------------- | ------------------------------------------------------------- |
| TM-01 | Hardware Project          | Design and implementation of electronic components.           |
| TM-02 | Hardware Integration      | Development and integration of the scale prototype.           |
| TM-03 | System Architecture       | API design and alignment with the implementation guide.       |
| TM-04 | Security & Compliance     | Secure authentication and data protection mechanisms.         |
| TM-05 | Scalability & Performance | Real-time processing and multi-center support.                |
| TM-06 | User Experience           | Ensuring usability for waste pickers and cooperative centers. |

(Additional themes …)

---

## **4. Epics**

> **Epics** define **high-level features** that contribute to system development.

| #     | Epic                             | Description                                                     |
| ----- | -------------------------------- | --------------------------------------------------------------- |
| EP-01 | Scale Prototype Development      | Design and build the hardware-integrated scale prototype.       |
| EP-02 | API Development                  | Implement the API for data collection, processing, and storage. |
| EP-03 | Mobile App Development           | Create the mobile application for user interaction.             |
| EP-04 | Implementation Guide Alignment   | Ensure compliance with the implementation guide.                |
| EP-05 | Security & Authentication        | Develop secure authentication mechanisms.                       |
| EP-06 | Usability & Accessibility        | Optimize UI/UX for waste pickers and cooperative centers.       |
| EP-07 | System Performance & Scalability | Optimize for real-time data processing and multiple centers.    |
| EP-08 | Hardware Resilience              | Ensure durability against environmental conditions.             |

(Additional epics …)

---

## **5. Capabilities**

> **Capabilities** describe the **system's technical abilities** to support key functionalities.

| #    | Capability                 | Description                                                       |
| ---- | -------------------------- | ----------------------------------------------------------------- |
| C-01 | Weight Measurement         | Accurately measure weight using the scale prototype.              |
| C-02 | Real-Time Data Processing  | Process weight data with minimal latency.                         |
| C-03 | Secure API Access          | Ensure authentication and authorization for API access.           |
| C-04 | Mobile User Interface      | Provide an intuitive mobile interface for waste pickers.          |
| C-05 | Multi-Center Support       | Allow multiple cooperative centers to use the system.             |
| C-06 | Environmental Resilience   | Ensure scale durability in dust, moisture, and impact conditions. |
| C-07 | Data Storage & Retrieval   | Store and retrieve weight data efficiently.                       |
| C-08 | Compliance with Guidelines | Follow best practices from the implementation guide.              |

(Additional capabilities …)

---

## **6. Features**

> **Features** define the **specific functionalities** required to implement each capability.

| #    | Feature                       | Description                                                       |
| ---- | ----------------------------- | ----------------------------------------------------------------- |
| F-01 | Scale Data Transmission       | Transmit weight data from the scale to the API.                   |
| F-02 | Mobile Weight Display         | Display real-time weight data on the mobile app.                  |
| F-03 | User Authentication           | Secure login system for API and app users.                        |
| F-04 | Offline Mode                  | Enable mobile app functionality without an internet connection.   |
| F-05 | Multi-Center Management       | Manage users and operations across multiple cooperative centers.  |
| F-06 | API Logging & Monitoring      | Track API requests and performance metrics.                       |
| F-07 | Data Export                   | Allow users to export collected data in CSV or JSON formats.      |
| F-08 | UI Accessibility Enhancements | Ensure the app is accessible for users with low digital literacy. |

(Additional features …)

---

## **7. User Stories**

> **User stories** describe **how different users interact with the system**, providing real-world scenarios.

| #     | Description                                                                                                                                |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| US-01 | As a scale operator, I want the equipment to perform precise measurements to avoid weighing errors.                                        |
| US-02 | As a scale operator, I want the equipment to have a digital display to view the weight before confirmation.                                |
| US-03 | As an administrator, I want the scale to be resistant to adverse environmental conditions (dust, moisture, impact) for greater durability. |
| US-04 | As a scale operator, I want the system to notify me if the scale is uncalibrated to ensure accuracy.                                       |
| US-05 | As an administrator, I want to configure different weighing modes in the system to meet operational needs.                                 |

(Additional user stories …)

---

## **8. Backlog**

The project backlog is a comprehensive list of all tasks, features, and improvements planned for the application. It serves as a central reference for what needs to be developed, allowing the development team to have a clear view of the project scope. Additionally, it functions as a list of features that will be prioritized and selected for the MVP scope.

| Theme | Epic                                    | Capabilities                    | Features                                | User Story | Description                                                                                           |
|-------|-----------------------------------------|---------------------------------|-----------------------------------------|------------|-------------------------------------------------------------------------------------------------------|
| TM01  | EP01 Content and User Management      | C01 User Management            | F01 Registration of Doctors and Admins | US01       | As a doctor, I would like to register in the system to have access credentials                      |
| TM01  | EP01 Content and User Management      | C01 User Management            | F05 Login for Doctors and Admins       | US02       | As a doctor, I would like to log into the system to access the platform's content                   |
| TM01  | EP01 Content and User Management      | C01 User Management            | F05 Login for Doctors and Admins       | US03       | As an administrator, I would like to log into the system to access management features               |
| TM01  | EP01 Content and User Management      | C01 User Management            | F04 User Profile Editing              | US04       | As a user (doctor or administrator), I would like to reset my password to recover access credentials |
| TM01  | EP01 Content and User Management      | C01 User Management            | F04 User Profile Editing              | US05       | As a user (doctor or administrator), I would like to edit my profile to update registered information |
| TM01  | EP02 Subscription and Notifications   | C04 Finance Management         | F12 Subscription Management           | US06       | As a doctor, I would like to access the finance area to manage my subscription                      |
| TM01  | EP01 Content and User Management      | C01 User Management            | F01 Registration of Doctors and Admins | US07       | As an administrator, I would like to create other admin accounts to assist in management            |
| TM01  | EP01 Content and User Management      | C01 User Management            | F02 User Search and Listing          | US08       | As an administrator, I would like to list users to view registered users                            |
| TM01  | EP01 Content and User Management      | C01 User Management            | F03 User Editing and Deletion        | US09       | As an administrator, I would like to edit a user to correct any registration errors                 |
| TM01  | EP01 Content and User Management      | C01 User Management            | F03 User Editing and Deletion        | US10       | As an administrator, I would like to delete a user to remove any improper registrations             |
| TM01  | EP01 Content and User Management      | C01 User Management            | F02 User Search and Listing          | US11       | As an administrator, I would like to search for a specific user to find them more easily           |
| TM01  | EP01 Content and User Management      | C02 Content Management         | F06 Document Creation and Listing    | US12       | As an administrator, I would like to create a document to add new material                          |
| TM01  | EP01 Content and User Management      | C02 Content Management         | F06 Document Creation and Listing    | US13       | As an administrator, I would like to list documents to view registered materials                    |
| TM01  | EP01 Content and User Management      | C02 Content Management         | F07 Document Editing and Deletion    | US14       | As an administrator, I would like to edit a document to update material                            |
| TM01  | EP01 Content and User Management      | C02 Content Management         | F07 Document Editing and Deletion    | US15       | As an administrator, I would like to delete a document to remove outdated material                 |
| TM01  | EP01 Content and User Management      | C02 Content Management         | F06 Document Creation and Listing    | US16       | As an administrator, I would like to create a topic to complement an already registered document    |
| TM01  | EP01 Content and User Management      | C02 Content Management         | F06 Document Creation and Listing    | US17       | As an administrator, I would like to list topics to view registered topics within a document       |
| TM01  | EP01 Content and User Management      | C02 Content Management         | F07 Document Editing and Deletion    | US18       | As an administrator, I would like to edit a topic to update the material                           |



## Revision History

| Date       | Version | Changes                           | Authors |
| ---------- | ------- | --------------------------------- | ------- |
| 2025-03-28 | 0.1     | Document creation                 | [Cainã Freitas](https://github.com/freitasc) and [Lucas Antunes](https://github.com/LucasGSAntunes)        |

[← Back to Main Page](../../index.md)
