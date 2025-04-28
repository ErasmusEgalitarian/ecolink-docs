# Product Backlog Building

[← Back to Main Page](../../index.md)

## Guide to Reviewing This Documentation

This document outlines the **functional and non-functional requirements** for **Ecolink**, which integrates **a hardware-connected scale, an API, and a mobile application**. The documentation follows a structured approach to ensure clarity and completeness.

### **How to Use This Documentation**

* **Functional Requirements (FR-00)** – Key capabilities the system must implement.
* **Non-Functional Requirements (NFR-00)** – Quality attributes ensuring system performance, security, and usability.
* **Themes (TM-00)** – High-level system areas grouping functionalities.
* **Epics (EP-00)** – Major features that contribute to the system's development.
* **Capabilities (C-00)** – The abilities the system must support.
* **Features (F-00)** – Specific technical functionalities fulfilling each capability.
* **User Stories (US-00)** – Individual use cases defining how users interact with the system.
* **Backlog** – A detailed, structured representation of all functionalities (to be built once all topics are mapped).

Each section follows a progressive breakdown of the system's structure, from high-level requirements to detailed functionalities.
Nothing in this document is final; please suggest corrections or improvements.

***

## **1. Functional Requirements**

> Defines the system's **core functionalities** — what the system must do.

| #     | Description                                                                                                                    |
| ----- | ------------------------------------------------------------------------------------------------------------------------------ |
| FR-01 | Media upload [System must allow the user to upload video (MP4, webM) and image files(PNG, JPEG, SVG)]                          |
| FR-02 | Data editing [The system must allow adding/editing/delete content and metadata for uploaded media]                             |
| FR-03 | The system must support role-based access control for content management.                                                      |
| FR-04 | The system must provide a content feed interface for users, displaying educational posts chronologically or by relevance.      |
| FR-05 | User Feedback [The system must allow users to provide feedback on the app's usability and content for continuous improvement.] |
| FR-06 | The system must support uploading multiple media files in one session.                                                         |
| FR-07 | Display a map with EcoPoints locations based on the user's current GPS position.                                              |
| FR-08 | Allow users to view detailed information about each EcoPoint (location, operating hours, materials accepted).                  |
| FR-09 | Provide users (students and collectors) with the ability to search for nearby EcoPoints.                                      |
| FR-10 | Enable an admin interface for managing EcoPoint locations and configurations.                                                 |
| FR-11 | Integrate map navigation to guide users to the selected EcoPoint.                                                             |
| FR-12 | The system must allow users to log in with email and password, validating credentials via the API.                            |
| FR-13 | The system must display appropriate error messages for failed login attempts.                                                 |

***

## **2. Non-Functional Requirements**

> Specifies **quality attributes** for performance, security, usability, scalability, etc. — how the system must perform the functions.

| #      | Type             | Description                                                                                                                                                                                                                                                            |
| ------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NFR-01 | **Scalability**  | The system must support multiple simultaneous uploads with no issues in performance                                                                                                                                                                                    |
| NFR-02 | **Usability**    | The application must use a color palette consistent with the project, ensuring a cohesive user experience. The colors should be selected to optimize readability and ensure adequate contrast for users with visual impairments, meeting WCAG 2.1 level AA guidelines. |
| NFR-03 | **Availability** | The system must ensure 99.9% availability throughout each month.                                                                                                                                                                                                       |
| NFR-04 | **Performance**  | The system's home page must load in less than 3 seconds on 4G or better networks.                                                                                                                                                                                      |
| NFR-05 | **Scalability**  | The system must allow the addition of new modules transparently, without impacting existing modules.                                                                                                                                                                   |
| NFR-06 | **Security**     | Only authenticated and authorized users can upload, edit, or delete content.                                                                                                                                                                                           |
| NFR-07 | **Usability**    | The map must be easy to navigate and responsive on mobile devices.                                                                                                                                                                                                     |
| NFR-08 | **Performance**  | Location data must load in under 2 seconds for optimal user experience.                                                                                                                                                                                                |
| NFR-09 | **Availability** | The system should maintain 99.5% uptime.                                                                                                                                                                                                                              |
| NFR-10 | **Maintainability** | Codebase should be modular and follow clean architecture principles.                                                                                                                                                                                                 |

***

## **3. Themes**

> **Themes** group major system areas under broad topics.

| #     | Theme              | Description                                                   |
| ----- | ------------------ | ------------------------------------------------------------- |
| TM-01 | Content Management | Manage pages, posts, and media content                        |
| TM-02 | Access Control     | Manage user roles and permissions                             |
| TM-03 | EcoPoint Discovery | Enable users to find and view EcoPoint locations on a map.    |
| TM-04 | Admin Management   | Enable system admins to manage and maintain EcoPoints.        |
| TM-05 | Auth               | This theme is related to login and logout to/from the system. |
| TM-06 | Social Interaction | Enable users to share content and track personal recycling.   |

***

## **4. Epics**

> **Epics** define **major features** that contribute to system development.

| #     | Epic                         | Description                                                              |
| ----- | ---------------------------- | ------------------------------------------------------------------------ |
| EP-01 | Media Upload and Management  | [High-level functional overview]                                         |
| EP-02 | Educational Content Delivery | Display educational content in a feed viewable by all users.             |
| EP-03 | Role-Based CMS Access        | Assign and enforce content permissions based on user roles.              |
| EP-04 | CMS Security & Moderation    | Ensure secure and controlled content publication through authentication. |
| EP-05 | User Map Interaction         | Users interact with a dynamic map to locate EcoPoints.                  |
| EP-06 | Admin Dashboard              | Admins configure and update EcoPoint details.                           |
| EP-07 | Social & Profile Interaction | Users interact with social and personal features of the platform.       |
| EP-08 | Authentication               | Handles user login, session, and credential management.                 |

***

## **5. Capabilities**

> **Capabilities** describe the system's **technical abilities** that support key functionalities.

| #    | Capability                      | Description                                                                                         |
| ---- | ------------------------------- | --------------------------------------------------------------------------------------------------- |
| C-01 | Media Upload Engine             | Allow users to upload and manage video and image files simultaneously.                              |
| C-02 | Feed Media View                 | Displays content in a chronological or relevance-based user feed.                                   |
| C-03 | Role Permission                 | Restrict access to editing/publishing content.                                                      |
| C-04 | Performance Optimization        | Ensures low-latency, fast page loads, and high availability.                                        |
| C-05 | Geolocation-Based Filtering     | The system identifies and displays nearby EcoPoints.                                                |
| C-06 | Interactive Map Visualization   | Renders EcoPoint markers and details on an interactive map.                                         |
| C-07 | Admin Data Management           | Admins can add, edit, or remove EcoPoint locations and metadata.                                   |
| C-08 | Social & Personal Interaction   | Supports user engagement through posts and donation tracking.                                       |
| C-09 | Authentication & Security       | Securely manages user sessions and credentials.                                                     |

***

## **6. Features**

> **Features** define the **specific functionalities** to implement each capability.

| #    | Feature                          | Description                                                                      |
| ---- | -------------------------------- | -------------------------------------------------------------------------------- |
| F-01 | Upload Multiple Media Files      | Allow users to upload several images and videos in a single session.             |
| F-02 | Edit Media Content               | Enable editing of media files and their metadata.                                |
| F-03 | Delete Media Content             | Enable to delete the media files and their metadata.                             |
| F-04 | View Feed of Educational Posts   | Allow users to see educational content feed sorted by date or engagement.        |
| F-05 | Assign Roles to Users            | Define access levels: admin, student or external user.                          |
| F-06 | Secure Access to CMS Actions     | Restrict sensitive actions (upload, delete, edit) only to authenticated users.   |
| F-07 | Display map with user location   | Integrate with a map service to display the user's current location.             |
| F-08 | Show EcoPoints on map            | Retrieve and plot nearby EcoPoints as markers on the map.                       |
| F-09 | Marker detail pop-ups            | When tapping a marker, display information such as location and hours.           |
| F-10 | Search EcoPoints by location     | Allow users to manually search by location or region.                            |
| F-11 | Admin panel for EcoPoint editing | Interface for admins to manage EcoPoint data (CRUD operations).                 |
| F-12 | Interactive social feed          | A place where users can share photos, videos, and text about recycling.         |
| F-13 | Personal recycling area          | A dashboard where students track their own donation history.                    |
| F-14 | Login page (web)                 | A responsive login page for user credential input.                              |
| F-15 | API login endpoint               | Backend endpoint to handle authentication requests.                             |
| F-16 | Web UI and backend integration   | Properly integrates frontend and backend authentication systems.                |

***

## **7. User Stories**

> **User stories** describe how users interact with the system in real-world scenarios.

| #     | Description                                                                                              |
| ----- | -------------------------------------------------------------------------------------------------------- |
| US-01 | As an **admin**, I want to upload and organize educational media so that I can keep the content up-to-date. |
| US-02 | As an **admin**, I want to assign roles to users so that I can manage access levels and permissions.     |
| US-03 | As an **admin**, I want to delete inappropriate or outdated content so that the platform stays relevant.  |
| US-04 | As a **student**, I want to view a feed of recycling tutorials so that I can learn and earn academic credit. |
| US-05 | As a **student**, I want to provide feedback on content so that I can help improve the platform.         |
| US-06 | As a **student**, I want to upload media about recycling practices so that I can share knowledge.        |
| US-07 | As an **external user**, I want to browse educational posts so that I can learn quickly.                 |
| US-08 | As an **external user**, I want to register and receive a role so that I can upload and interact with content. |
| US-09 | As an **external user**, I want to report inappropriate content so that platform quality is maintained.   |
| US-10 | As a **user** (any type), I want to upload multiple media files at once so that I save time.             |
| US-11 | As a **user** (any type), I want the app to load quickly and be easy to use so that I can navigate without difficulty. |
| US-12 | As a **student**, I want to view nearby EcoPoints on a map so that I can find where to make donations.  |
| US-13 | As a **collector**, I want to find EcoPoints so I can collect the donations.                           |
| US-14 | As an **admin**, I want to manage EcoPoint locations so that users see accurate and updated information. |
| US-15 | As a **user**, I want to get directions to an EcoPoint so that I can navigate easily to it.             |
| US-16 | As a **user**, I want to see what are the materials being donated at a certain EcoPoint.               |
| US-17 | As a **student**, I want to see which materials I have already donated.                                |
| US-18 | As a **user**, I want to access an interface that allows me to share photos, text, and videos about EcoPoints and recycling. |
| US-19 | As a **student**, I wish to have my matriculation number assigned to my account so I can gain credits at college. |
| US-20 | As a **user**, I want to log in to the system so that I can access specific data.                      |
| US-21 | As a **user**, I want my credentials to be securely handled so that I can trust the system.            |
| US-22 | As a **user**, I want the website to be responsive so I can access it through multiple devices, such as smartphones and tablets. |
| US-23 | As a **user**, I want proper error and exception handling on the login/logout system so I can transparently understand what's happening when something goes wrong. |

***

## **8. Backlog**

The project backlog is a structured list of all tasks, features, and improvements planned. It guides development priorities and serves as the foundation for MVP scope selection.

| Theme         | Epic                               | Capabilities                 | Features                            | User Story | Description                                                                                                |
| ------------- | ---------------------------------- | ---------------------------- | ----------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| TM-01         | EP-01 Media Upload and Management  | C-01 Media Upload Engine     | F-01 Upload Multiple Media Files    | US-01      | As an admin, I want to upload and organize educational media so that I can keep the content up-to-date.    |
| TM-02         | EP-03 Role-Based CMS Access        | C-03 Role Permission         | F-05 Assign Roles to Users          | US-02      | As an admin, I want to assign roles to users so that I can manage access levels and permissions.           |
| TM-01         | EP-01 Media Upload and Management  | C-01 Media Upload Engine     | F-03 Delete Media Content           | US-03      | As an admin, I want to delete inappropriate or outdated content so that the platform stays relevant.       |
| TM-01         | EP-02 Educational Content Delivery | C-02 Feed Media View         | F-04 View Feed of Educational Posts | US-04      | As a student, I want to view a feed of recycling tutorials so that I can learn and earn academic credit.   |
| TM-01         | EP-02 Educational Content Delivery | C-02 Feed Media View         | F-04 View Feed of Educational Posts | US-05      | As a student, I want to provide feedback on content so that I can help improve the platform.               |
| TM-01         | EP-01 Media Upload and Management  | C-01 Media Upload Engine     | F-01 Upload Multiple Media Files    | US-06      | As a student, I want to upload media about recycling practices so that I can share knowledge.              |
| TM-01         | EP-02 Educational Content Delivery | C-02 Feed Media View         | F-04 View Feed of Educational Posts | US-07      | As an external user, I want to browse educational posts so that I can learn quickly.                       |
| TM-02         | EP-03 Role-Based CMS Access        | C-03 Role Permission         | F-05 Assign Roles to Users          | US-08      | As an external user, I want to register and receive a role so that I can upload and interact with content. |
| TM-02         | EP-04 CMS Security & Moderation    | C-04 Performance Optimization | F-06 Secure Access to CMS Actions   | US-09      | As an external user, I want to report inappropriate content so that platform quality is maintained.        |
| TM-01         | EP-01 Media Upload and Management  | C-01 Media Upload Engine     | F-01 Upload Multiple Media Files    | US-10      | As a user, I want to upload multiple media files at once so that I save time.                              |
| TM-02         | EP-04 CMS Security & Moderation    | C-04 Performance Optimization | F-06 Secure Access to CMS Actions   | US-11      | As a user, I want the app to load quickly and be easy to use so that I can navigate without difficulty.    |
| TM-03         | EP-05 User Map Interaction         | C-05, C-06                   | F-07, F-08, F-09, F-10             | US-12, US-13 | Students and collectors can view EcoPoints on the map and interact with them.                            |
| TM-04         | EP-06 Admin Dashboard              | C-07                         | F-11                                 | US-14      | Admins manage EcoPoint metadata through an admin interface.                                               |
| TM-06         | EP-07 Social & Profile Interaction | C-08                         | F-12, F-13                          | US-15, US-16, US-17, US-18, US-19 | Users interact with social features and view personal donation history.                                  |
| TM-05         | EP-08 Authentication               | C-09                         | F-14, F-15, F-16                    | US-20, US-21, US-22, US-23 | Users authenticate securely and access the app across multiple devices.                                  |

***

## Revision History

| Date       | Version | Changes                                               | Authors                                                                                              |
| ---------- | ------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 2025-03-28 | 0.1     | Document creation                                     | [Cainã Freitas](https://github.com/freitasc) and [Lucas Antunes](https://github.com/LucasGSAntunes)  |
| 2025-04-17 | 0.2     | First increments to the Backlog                       | [Iago Matos](https://github.com/iagoscm) and [Alexia Naara](https://github.com/alexianaa)            |
| 2025-04-20 | 0.3     | Added login features, epics, user stories and backlog | [Eduardo F. Aquino](https://github.com/fxred)                                                        |
| 2025-04-21 | 1.0     | First increments to the Backlog                       | [Caio Habibe](https://github.com/CaioHabibe) and [Pedro Lucas Dourado](https://github.com/lucasdray) |                                                       |

[← Back to Main Page](../../index.md)