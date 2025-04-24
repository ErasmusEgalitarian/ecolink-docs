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

| #     | Description                                                                                                   |
|-------|---------------------------------------------------------------------------------------------------------------|
| FR-01 | Display a map with EcoPoints locations based on the user's current GPS position.                              |
| FR-02 | Allow users to view detailed information about each EcoPoint (location, operating hours, materials accepted). |
| FR-03 | Provide users (students and collectors) with the ability to search for nearby EcoPoints.                      |
| FR-04 | Enable an admin interface for managing EcoPoint locations and configurations.                                 |
| FR-05 | Integrate map navigation to guide users to the selected EcoPoint.                                             |
| FR-01 | 	The system must allow users to  log in using email and password.    |
| FR-02 | 	The system must validate the user credentials via API.    |
| FR-03 | 	The system must provide an error for failed login attempts.    |

---

## **2. Non-Functional Requirements**

> Specifies **quality attributes** for performance, security, usability, scalability, etc. — how the system must perform the functions.

| #      | Type         | Description                                                             |
|--------|--------------|-------------------------------------------------------------------------|
| NFR-01 | Usability     | The map must be easy to navigate and responsive on mobile devices.     |
| NFR-02 | Performance   | Location data must load in under 2 seconds for optimal user experience.|
| NFR-03 | Availability  | The system should maintain 99.5% uptime.                               |
| NFR-04 | Scalability   | Must support scaling to accommodate future EcoPoint additions.         |
| NFR-05 | Maintainability | Codebase should be modular and follow clean architecture principles. |
| NFR-01 | Performance      | The login must take no more than 2 seconds to successfully log in the user.          |

---

## **3. Themes**

> **Themes** group major system areas under broad topics.

| #     | Theme              | Description                                                |
|-------|--------------------|------------------------------------------------------------|
| TM-01 | EcoPoint Discovery | Enable users to find and view EcoPoint locations on a map. |
| TM-02 | Admin Management   | Enable system admins to manage and maintain EcoPoints.     |
| TM-01 | Auth  | This theme is related to login and logout to/from the system.           |

---

## **4. Epics**

> **Epics** define **major features** that contribute to system development.

| #     | Epic                 | Description                                            |
|-------|----------------------|--------------------------------------------------------|
| EP-01 | User Map Interaction | Users interact with a dynamic map to locate EcoPoints. |
| EP-02 | Admin Dashboard      | Admins configure and update EcoPoint details.          |
| EP-03 | User App Interaction | Users use the app to share and see progress            |
| EP-01 | Login     | This epic is related to the user login into the system.           |

---

## **5. Capabilities**

> **Capabilities** describe the system's **technical abilities** that support key functionalities.

| #    | Capability                    | Description                                                      |
|------|-------------------------------|------------------------------------------------------------------|
| C-01 | Geolocation-Based Filtering   | The system identifies and displays nearby EcoPoints.             |
| C-02 | Interactive Map Visualization | Renders EcoPoint markers and details on an interactive map.      |
| C-03 | Admin Data Management         | Admins can add, edit, or remove EcoPoint locations and metadata. |
| C-04 | User Platform Interaction     | Features that go beyond the donation and collecting system       |
| C-01 | Security  | The system should be able to securely log in an user and store his credentials and tokens securely.  |

---

## **6. Features**

> **Features** define the **specific functionalities** to implement each capability.

| #    | Feature                          | Description                                                            |
|------|----------------------------------|------------------------------------------------------------------------|
| F-01 | Display map with user location   | Integrate with a map service to display the user’s current location.   |
| F-02 | Show EcoPoints on map            | Retrieve and plot nearby EcoPoints as markers on the map.              |
| F-03 | Marker detail pop-ups            | When tapping a marker, display information such as location and hours. |
| F-04 | Search EcoPoints by location     | Allow users to manually search by location or region.                  |
| F-05 | Admin panel for EcoPoint editing | Interface for admins to manage EcoPoint data (CRUD operations).        |
| F-06 | Interactive social feed          | A place where the users can share photos, videos and text              |
| F-07 | Personal recycling area          | A place where the students can see what they already recycled          |
| F-01 | Login page (web)      | A login responsive webpage that asks for user credentials should be implemented. |
| F-02 | API login endpoint      | A login endpoint on the backend should be implemented. |
| F-03 | Web UI and backend integration     | Both systems should be properly integrated between each other. |

---

## **7. User Stories**

> **User stories** describe how users interact with the system in real-world scenarios.

| #     | Description                                                                                                                     |
|-------|---------------------------------------------------------------------------------------------------------------------------------|
| US-01 | As a student, I want to view nearby EcoPoints on a map so that I can find where to make donations.                              |
| US-02 | As a collector, I want to find EcoPoints so I can collect the donations.                                                        |
| US-03 | As an admin, I want to manage EcoPoint locations so that users see accurate and updated information.                            |
| US-04 | As an user, I want to get directions to an EcoPoint so that I can navigate easily to it.                                        |
| US-05 | As an user, I want to see what are the materials being donated on a certain EcoPoint                                            |
| US-06 | As a student, I want to see which materials I already donated                                                                   |
| US-07 | As an user, I want to have access to an interface that allows me to share photos, text and videos about EcoPoints and recycling |
| US-08 | As a student, I wish to have my matriculation number assigned to my account, so I can gain credits on the college               |
| US-01 | As a user, I want to login on the system so that I can access specific data.          |
| US-02 | As a user, I want to have my credentials securely handled so that I can trust the system.          |
| US-03 | As a user, I want the website to be responsive so I can access it through multiple devices, such as smartphones and tablets.      |
| US-04 | As a user, I want proper error and exception handling on the login/logout system so I can transparently understand what's happening when something goes wrong.      |

---

## **8. Backlog**

The project backlog is a structured list of all tasks, features, and improvements planned. It guides development priorities and serves as the foundation for MVP scope selection.

| Theme | Epic  | Capabilities | Features         | User Story          | Description                                                                                                 |
|-------|-------|--------------|------------------|---------------------|-------------------------------------------------------------------------------------------------------------|
| TM-01 | EP-01 | C-01         | F-01             | US-01, US-06, US-08 | As a student, I want to be able to use the app properly, find EcoPoints, make my donations and gain credits |
| TM-01 | EP-01 | C-02         | F-02, F-03, F-04 | US-02               | As a collector, I want to find EcoPoints so I can collect the donations.                                    |
| TM-02 | EP-02 | C-03         | F-05             | US-03               | As an admin, I want to manage EcoPoint locations so that users see accurate and updated information.        |
| TM-01 | EP-03 | C-04         | F-06, F-07       | US-04, US-05, US-07 | As an user, I wish to have properly access to the app features and be able to share informations            |
| TM01  | EP01   | C01          | F01      | US01       | As a user, I want to log in using my credentials so that I can access specific data to my account.
| TM01  | EP01   | C01          | F02      | US02       | As a user, I want my credentials properly handled so I can securely use the system.
| TM01  | EP01   | C01          | F03      | US03       | As a user, I want the website to be responsive so I can access it through multiple different devices.
| TM01  | EP01   | C01          | F03      | US04       | As a user, I want proper error/exception handling so I can have a transparent view of what's happening on the system.

---

## Revision History

| Date       | Version | Changes                         | Authors                                                                                             |
|------------|---------|---------------------------------|-----------------------------------------------------------------------------------------------------|
| 2025-03-28 | 0.1     | Document creation               | [Cainã Freitas](https://github.com/freitasc) and [Lucas Antunes](https://github.com/LucasGSAntunes) |
| 2025-04-20 | 0.2     | Added login features, epics, user stories and backlog | [Eduardo F. Aquino](https://github.com/fxred)|
| 2025-04-17 | 0.2     | First increments to the Backlog | [Iago Matos](https://github.com/iagoscm) and [Alexia Naara](https://github.com/alexianaa)           |

[← Back to Main Page](../../index.md)
