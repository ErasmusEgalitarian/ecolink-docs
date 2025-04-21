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

| #     | Description                                                                                                                    |
| ----- | ------------------------------------------------------------------------------------------------------------------------------ |
| FR-01 | Media upload [System must allow the user to upload video (MP4, webM) and image files(PNG, JPEG, SVG)]                          |
| FR-02 | Data editing [The system must allow adding/editing/delete content and metadata for uploaded media]                             |
| FR-03 | The system must support role-based access control for content management.                                                      |
| FR-04 | The system must provide a content feed interface for users, displaying educational posts chronologically or by relevance.      |
| FR-05 | User Feedback [The system must allow users to provide feedback on the app’s usability and content for continuous improvement.] |
| FR-06 | The system must sup port uploading multiple media files in one session.                                                        |


---

## **2. Non-Functional Requirements**

> Specifies **quality attributes** for performance, security, usability, scalability, etc. — how the system must perform the functions.

| #      | Type             | Description                                                                                                                                                                                                                                                            |
| ------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NFR-01 | **Scalability**  | [The system must support multiple simultaneous uploads with no issues in performance]                                                                                                                                                                                  |
| NFR-02 | **Usability**    | The application must use a color palette consistent with the project, ensuring a cohesive user experience. The colors should be selected to optimize readability and ensure adequate contrast for users with visual impairments, meeting WCAG 2.1 level AA guidelines. |
| NFR-03 | **Availability** | The system must ensure 99.9% availability throughout each month.                                                                                                                                                                                                       |
| NFR-04 | **Perfomance**   | The system’s home page must load in less than 3 seconds on 4G or better networks.                                                                                                                                                                                      |
| NFR-05 | **Scalability**  | The system must allow the addition of new modules transparently, without impacting existing modules.                                                                                                                                                                   |
| NFR-06 | **Security**     | Only authenticated and authorized users can upload, edit, or delete content.                                                                                                                                                                                           |

---

## **3. Themes**

> **Themes** group major system areas under broad topics.

| #     | Theme              | Description                            |
| ----- | ------------------ | -------------------------------------- |
| TM-01 | Content Management | Manage pages, posts, and media content |
| TM-02 | Access Control     | Manage user roles and permissions      |
		

---

## **4. Epics**

> **Epics** define **major features** that contribute to system development.

| #     | Epic                         | Description                                                              |
| ----- | ---------------------------- | ------------------------------------------------------------------------ |
| EP-01 | Media Upload and Management  | [High-level functional overview]                                         |
| EP-02 | Educational Content Delivery | Display educational content in a feed viewable by all users.             |
| EP-03 | Role-Based CMS Access        | Assign and enforce content permissions based on user roles.              |
| EP-04 | CMS Security & Moderation    | Ensure secure and controlled content publicaiton through authentication. |

---

## **5. Capabilities**

> **Capabilities** describe the system's **technical abilities** that support key functionalities.

| #    | Capability              | Description                                                            |
| ---- | ----------------------- | ---------------------------------------------------------------------- |
| C-01 | Media Upload Engine     | Allow users to upload and manage video and image files simultaneously. |
| C-02 | Feed Media View         | Displays content in a chronological or relevance-based user feed.      |
| C-03 | Role Permission         | Restrict access to editing/publishing content.                         |
| C-04 | Perfomance Optimization | Ensures low-latency, fast page loads, and high availabity. |

---

## **6. Features**

> **Features** define the **specific functionalities** to implement each capability.

| #    | Feature                        | Description                                                                    |
| ---- | ------------------------------ | ------------------------------------------------------------------------------ |
| F-01 | Upload Multiple Media Files    | Allow users to upload several images and videos in a single session.           |
| F-02 | Edit Media Content             | Enable edditing of media files and their metadata.                             |
| F-03 | Delete Media Content           | Enable to delete the media files and their metadata.                           |
| F-04 | View Feed of Educational Posts | Allow users to see edcuational content feed sorted by date or engagement.      |
| F-05 | Assign Roles to Users          | Define access levels: admin, student or external user.                         |
| F-06 | Secure Acess to CMS Actions    | Restrict sensitive acitons (upload, delete, edit) only to authenticated users. |
|      |                                |                                                                                |

---

## **7. User Stories**

> **User stories** describe how users interact with the system in real-world scenarios.

| #     | Description                                                                                              |
| ----- | -------------------------------------------------------------------------------------------------------- |
| US-01 | As an **admin**, I want to upload and organize educational media so that I can keep the content up-to-date. |
| US-02 | As an **admin**, I want to assign roles to users so that I can manage access levels and permissions.     |
| US-03 | As an **admin**, I want to delete inappropriate or outdated content so that the platform stays relevant. |
| US-04 | As a **student**, I want to view a feed of recycling tutorials so that I can learn and earn academic credit. |
| US-05 | As a **student**, I want to provide feedback on content so that I can help improve the platform.         |
| US-06 | As a **student**, I want to upload media about recycling practices so that I can share knowledge.        |
| US-07 | As an **external user**, I want to browse educational posts so that I can learn quickly. |
| US-08 | As an **external user**, I want to register and receive a role so that I can upload and interact with content. |
| US-09 | As an **external user**, I want to report inappropriate content so that platform quality is maintained.  |
| US-10 | As a **user** (any type), I want to upload multiple media files at once so that I save time.             |
| US-11 | As a **user** (any type), I want the app to load quickly and be easy to use so that I can navigate without difficulty. |





## **8. Backlog**

The project backlog is a structured list of all tasks, features, and improvements planned. It guides development priorities and serves as the foundation for MVP scope selection.

| Theme | Epic                               | Capabilities                 | Features                            | User Story | Description                                                                                                |
| ----- | ---------------------------------- | ---------------------------- | ----------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| TM-01 | EP-01 Media Upload and Management  | C-01 Media Upload Engine     | F-01 Upload Multiple Media Files    | US-01      | As an admin, I want to upload and organize educational media so that I can keep the content up-to-date.    |
| TM-02 | EP-03 Role-Based CMS Access        | C-03 Role Permission         | F-05 Assign Roles to Users          | US-02      | As an admin, I want to assign roles to users so that I can manage access levels and permissions.           |
| TM-01 | EP-01 Media Upload and Management  | C-01 Media Upload Engine     | F-03 Delete Media Content           | US-03      | As an admin, I want to delete inappropriate or outdated content so that the platform stays relevant.       |
| TM-01 | EP-02 Educational Content Delivery | C-02 Feed Media View         | F-04 View Feed of Educational Posts | US-04      | As a student, I want to view a feed of recycling tutorials so that I can learn and earn academic credit.   |
| TM-01 | EP-02 Educational Content Delivery | C-02 Feed Media View         | F-04 View Feed of Educational Posts | US-05      | As a student, I want to provide feedback on content so that I can help improve the platform.               |
| TM-01 | EP-01 Media Upload and Management  | C-01 Media Upload Engine     | F-01 Upload Multiple Media Files    | US-06      | As a student, I want to upload media about recycling practices so that I can share knowledge.              |
| TM-01 | EP-02 Educational Content Delivery | C-02 Feed Media View         | F-04 View Feed of Educational Posts | US-07      | As an external user, I want to browse educational posts so that I can learn quickly.                       |
| TM-02 | EP-03 Role-Based CMS Access        | C-03 Role Permission         | F-05 Assign Roles to Users          | US-08      | As an external user, I want to register and receive a role so that I can upload and interact with content. |
| TM-02 | EP-04 CMS Security & Moderation    | C-04 Perfomance Optimization | F-06 Secure Access to CMS Actions   | US-09      | As an external user, I want to report inappropriate content so that platform quality is maintained.        |
| TM-01 | EP-01 Media Upload and Management  | C-01 Media Upload Engine     | F-01 Upload Multiple Media Files    | US-10      | As a user, I want to upload multiple media files at once so that I save time.                              |
| TM-02 | EP-04 CMS Security & Moderation    | C-04 Perfomance Optimization | F-06 Secure Access to CMS Actions   | US-11      | As a user, I want the app to load quickly and be easy to use so that I can navigate without difficulty.    |

---

## Revision History

| Date       | Version | Changes                         | Authors                                                                                              |
| ---------- | ------- | ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 2025-03-28 | 0.1     | Document creation               | [Cainã Freitas](https://github.com/freitasc) and [Lucas Antunes](https://github.com/LucasGSAntunes)  |
| 2025-04-21 | 1.0     | Fisrt increments to the Backlog | [Caio Habibe](https://github.com/CaioHabibe) and [Pedro Lucas Dourado](https://github.com/lucasdray) |

[← Back to Main Page](../../index.md)
