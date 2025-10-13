# MVP1 Product Backlog - User Stories

## 1. Overview

[← Back to Product](./overview.md) | [← Back to Backlog](./product-backlog.md) | [← Back to Main Page](../../index.md)

This document contains **all User Stories (US) required for MVP1** with their complete acceptance criteria. MVP1 focuses on delivering the core platform functionality that enables users to register, locate EcoPoints, scan QR codes, register donations, and track their recycling history.

**MVP1 Scope:**
- **Total User Stories:** 68
- **Total Story Points:** 252
- **Epics Covered:** 8
- **Target Duration:** 12 weeks (6 sprints × 2 weeks)
- **Target Date:** Q1 2026

---

## 2. User Stories by Epic

### **EP-001: User Authentication & Profile Management**

#### **Feature: F-001 - Email/Password Authentication**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-001 | As a new user, I want to register with email and password so that I can create an account | • Email validation (format check)<br>• Password strength requirements (min 8 chars, uppercase, lowercase, number)<br>• Success/error feedback messages<br>• Redirect to dashboard on success | 3 | Critical | Ready |
| US-002 | As a registered user, I want to log in with my email and password so that I can access my account | • JWT token generation<br>• Session management<br>• Remember me option<br>• Redirect to dashboard after login | 3 | Critical | Ready |
| US-003 | As a user, I want to reset my password if I forget it so that I can regain access to my account | • Email verification sent to registered address<br>• Secure token generation (expires in 1 hour)<br>• Password update confirmation<br>• Auto-login after successful reset | 5 | High | Ready |
| US-004 | As a system, I must validate user inputs on both frontend and backend so that data integrity is maintained | • Client-side validation with real-time feedback<br>• Server-side validation with error codes<br>• Sanitization against injection attacks<br>• Consistent validation rules across layers | 2 | Critical | Ready |

**Feature Total:** 13 Story Points

---

#### **Feature: F-002 - User Profile Management**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-005 | As a logged-in user, I want to view my profile information so that I can verify my account details | • Display name, email, registration date<br>• Recycling statistics summary<br>• Profile layout responsive on all devices | 2 | High | Ready |
| US-006 | As a logged-in user, I want to edit my profile information so that I can keep my data up-to-date | • Editable fields: name, email, password<br>• Validation on all fields<br>• Confirmation dialog for changes<br>• Update success message | 3 | High | Ready |
| US-007 | As a user, I want my profile picture to display a default avatar so that my profile is visually identifiable | • Default avatar assignment on registration<br>• Avatar displayed in navbar<br>• Avatar displayed on profile page | 1 | Medium | Ready |
| US-008 | As a system admin, I want to view user roles and permissions so that I can manage access control | • Display user role (user, admin, cooperative_member)<br>• Permission levels visible in admin panel<br>• Filter users by role | 2 | High | Ready |

**Feature Total:** 8 Story Points

---

#### **Feature: F-003 - User Roles & Permissions**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-009 | As a system, I must assign roles to users upon registration so that permissions are enforced | • Default role = "user" for new registrations<br>• Roles stored in database<br>• JWT contains role claim<br>• Role cannot be self-assigned | 3 | High | Ready |
| US-010 | As an admin, I want to manage EcoPoints so that I can add/edit/remove collection stations | • Admin-only access to EcoPoint CRUD operations<br>• Validation on all EcoPoint fields<br>• Audit logging for all changes<br>• Confirmation dialogs for delete operations | 5 | Critical | Ready |
| US-011 | As a cooperative member, I want to manage educational content so that I can share recycling knowledge | • Content creation/editing interface<br>• Draft/publish workflow<br>• Content moderation queue<br>• Role-based access control | 5 | High | Ready |

**Feature Total:** 13 Story Points

---

#### **Feature: F-004 - Session Management & Security**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-012 | As a system, I must manage user sessions securely so that unauthorized access is prevented | • JWT with 7-day expiration for personal devices<br>• Refresh token mechanism<br>• Secure HTTP-only cookies<br>• Session revocation capability | 5 | Critical | Ready |
| US-013 | As a system, I must automatically log out inactive users so that security is maintained | • 5-minute inactivity timeout at EcoPoint kiosks<br>• 30-minute timeout on personal devices<br>• Session warning at 1 minute remaining<br>• Clear session data on logout | 3 | Critical | Ready |

**Feature Total:** 8 Story Points

**Epic EP-001 Total:** 42 Story Points

---

### **EP-002: User Interface & Experience Design**

#### **Feature: F-005 - Login/Registration Screens**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-014 | As a user, I want an intuitive login screen so that I can quickly access my account | • Clean form layout<br>• Email/password fields with labels<br>• "Forgot Password" link visible<br>• "Sign Up" CTA prominent<br>• Loading states during submission<br>• Clear error messages | 3 | Critical | Ready |
| US-015 | As a new user, I want a simple registration form so that I can easily create an account | • Name, email, password fields<br>• Password confirmation field<br>• Terms acceptance checkbox<br>• Inline validation<br>• Success redirect to dashboard | 3 | Critical | Ready |
| US-016 | As a user on mobile, I want the login/registration to be optimized for touch so that interaction is seamless | • Touch-friendly buttons (min 44px height)<br>• Appropriate keyboard types (email, password)<br>• Autofill support for credentials<br>• No pinch/zoom required | 2 | High | Ready |

**Feature Total:** 8 Story Points

---

#### **Feature: F-006 - Navigation & Layout Structure**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-017 | As a user, I want a consistent navigation menu so that I can easily move between sections | • Bottom navigation on mobile (Home, Map, Donate, Profile)<br>• Sidebar navigation on desktop<br>• Active state indicators<br>• Icons + labels for clarity | 3 | High | Ready |
| US-018 | As a user, I want the app to be responsive so that I can use it on any device | • Breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)<br>• No horizontal scroll on any device<br>• Touch-friendly on mobile<br>• Mouse-optimized on desktop | 3 | Critical | Ready |
| US-019 | As a user, I want visual consistency across all screens so that the experience feels cohesive | • Consistent color palette (green primary, earth tones)<br>• Typography system defined<br>• Spacing scale consistent<br>• Component library (buttons, cards, forms) | 2 | High | Ready |

**Feature Total:** 8 Story Points

---

#### **Feature: F-007 - User Dashboard**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-020 | As a logged-in user, I want to see my recycling summary on the dashboard so that I can track my impact | • Total recyclables donated (kg)<br>• Number of donations<br>• Environmental impact metrics (CO2 saved, trees planted equivalent)<br>• Visual representation (charts/icons) | 3 | High | Ready |
| US-021 | As a user, I want quick access to key actions from the dashboard so that I can efficiently use the app | • "Find EcoPoint" button prominent<br>• "View History" button accessible<br>• "Scan QR Code" CTA visible<br>• One-tap navigation to key features | 2 | High | Ready |
| US-022 | As a user, I want to see my recent donations on the dashboard so that I have quick overview of my activity | • List of last 5 donations<br>• Display: date, material type, weight, status<br>• Link to full history<br>• Empty state if no donations | 3 | Medium | Ready |

**Feature Total:** 8 Story Points

---

#### **Feature: F-008 - Accessibility Features**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-023 | As a user with visual impairment, I want sufficient color contrast so that I can read content easily | • Minimum 4.5:1 contrast ratio for normal text<br>• Minimum 3:1 contrast for large text<br>• Accessible color palette throughout<br>• Tested with accessibility tools | 2 | Medium | Ready |
| US-024 | As a user with motor impairments, I want keyboard navigation support so that I can use the app without a mouse | • All interactive elements focusable via Tab<br>• Visible focus indicators<br>• Logical tab order<br>• Keyboard shortcuts for main actions | 3 | Medium | Ready |
| US-025 | As a screen reader user, I want semantic HTML and ARIA labels so that I can understand the interface | • Proper heading hierarchy (h1, h2, h3)<br>• Alt text for all images<br>• ARIA labels for icon buttons<br>• Form labels associated with inputs | 3 | Medium | Ready |

**Feature Total:** 8 Story Points

**Epic EP-002 Total:** 32 Story Points

---

### **EP-003: EcoPoint Location & Discovery**

#### **Feature: F-009 - EcoPoint Map View**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-026 | As a user, I want to see EcoPoints on a map so that I can find nearby collection stations | • Integration with mapping API (Google Maps/Mapbox)<br>• Markers for each EcoPoint<br>• User location marker<br>• Zoom/pan controls functional | 5 | Critical | Ready |
| US-027 | As a user, I want to see my current location on the map so that I can orient myself | • Geolocation permission request<br>• Blue dot for user location<br>• Auto-center on user location on first load<br>• "Locate me" button | 3 | Critical | Ready |
| US-028 | As a user, I want to see the distance to each EcoPoint so that I can choose the nearest one | • Distance calculation using haversine formula<br>• Display distance in km/meters<br>• Sort by distance option<br>• Real-time distance updates as map moves | 3 | High | Ready |
| US-029 | As a user, I want to tap on an EcoPoint marker so that I can view its details | • Info window/modal appears on tap<br>• Display: name, address, accepted materials, hours<br>• "Get Directions" button<br>• "View Details" link to full page | 2 | High | Ready |

**Feature Total:** 13 Story Points

---

#### **Feature: F-010 - EcoPoint List View**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-030 | As a user, I want to see a list of nearby EcoPoints so that I can compare options | • List sorted by distance (default)<br>• Card layout with: name, distance, address, accepted materials<br>• Thumbnail image for each EcoPoint<br>• Tap to view details | 3 | High | Ready |
| US-031 | As a user, I want to switch between map and list views so that I can choose my preferred visualization | • Toggle button (Map/List)<br>• Maintain filter/search state when switching<br>• Smooth transition between views<br>• Active view indicator | 2 | Medium | Ready |
| US-032 | As a user, I want to search for EcoPoints by name or address so that I can find specific locations | • Search bar with placeholder text<br>• Autocomplete suggestions<br>• Real-time filtering as user types<br>• "No results" state with helpful message | 3 | Medium | Ready |

**Feature Total:** 8 Story Points

---

#### **Feature: F-011 - EcoPoint Detail Screen**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-033 | As a user, I want to view detailed information about an EcoPoint so that I know what to expect | • Display: name, full address, opening hours, contact info<br>• Photo gallery (if available)<br>• Accepted materials list with icons<br>• Operational status indicator | 3 | High | Ready |
| US-034 | As a user, I want to get directions to an EcoPoint so that I can navigate there | • "Get Directions" button opens navigation app<br>• Support for Google Maps and Apple Maps<br>• Pass destination coordinates correctly<br>• Fallback to web maps if apps not installed | 2 | High | Ready |
| US-035 | As a user, I want to see which recyclable materials are accepted so that I know what to bring | • Visual list with icons: plastic, glass, paper, metal, electronics<br>• Color-coded categories<br>• Clear labels for each material type<br>• "Not accepted" list if applicable | 2 | High | Ready |
| US-036 | As a user, I want to see the EcoPoint's operational status so that I don't visit when closed | • Display status: Open/Closed/Full<br>• Opening hours with current day highlighted<br>• Next opening time if closed<br>• Real-time status updates | 1 | Medium | Ready |

**Feature Total:** 8 Story Points

**Epic EP-003 Total:** 29 Story Points

---

### **EP-004: QR Code Access & Kiosk Integration**

#### **Feature: F-012 - QR Code Reader**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-037 | As a user at an EcoPoint, I want to scan the QR code so that I can start the donation process | • Camera permission request<br>• QR code scanning interface<br>• Visual feedback on successful scan<br>• Redirect to donation page with EcoPoint context | 5 | Critical | Ready |
| US-038 | As a system, I must validate the QR code so that only authorized EcoPoints are accessed | • QR code contains: EcoPoint ID + timestamp + signature<br>• Server-side validation<br>• Reject expired codes (>5 min old)<br>• Reject invalid/tampered codes | 3 | Critical | Ready |
| US-039 | As a user, I want clear instructions on how to scan the QR code so that I can complete the action successfully | • Instruction text: "Point camera at QR code"<br>• Scanning frame overlay<br>• Auto-scan when code detected<br>• Troubleshooting tips if scan fails | 2 | High | Ready |
| US-040 | As a user with camera issues, I want to manually enter the EcoPoint code so that I can still donate | • "Enter code manually" option visible<br>• Numeric input field<br>• Code validation<br>• Same flow as QR scan after validation | 3 | Medium | Ready |

**Feature Total:** 13 Story Points

---

#### **Feature: F-013 - Session Timeout & Security**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-041 | As a system, I must enforce a 5-minute session timeout at EcoPoint kiosks so that stations remain available | • Countdown timer starts after login<br>• Warning at 1 minute remaining<br>• Auto-logout at 0:00<br>• Return to QR scan screen after logout | 3 | Critical | Ready |
| US-042 | As a user, I want to see the remaining session time so that I know how long I have | • Persistent timer in UI header<br>• Color changes: green → yellow → red<br>• "Extend session" button (adds 2 minutes, max 1 extension)<br>• Timer pauses during active donation submission | 2 | High | Ready |
| US-043 | As a user, I want to manually end my session so that the next person can use the kiosk | • "End Session" button visible<br>• Confirmation dialog: "Are you sure?"<br>• Immediate logout on confirmation<br>• Clear all session data | 2 | High | Ready |
| US-044 | As a system, I must clear all user data from the kiosk after logout so that privacy is protected | • Clear localStorage and sessionStorage<br>• Revoke authentication tokens<br>• Reset UI state to initial<br>• No cached user information remains | 1 | Critical | Ready |

**Feature Total:** 8 Story Points

**Epic EP-004 Total:** 21 Story Points

---

### **EP-005: Donation Registration & Validation**

#### **Feature: F-014 - Donation Form**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-045 | As a user at an EcoPoint, I want to register my donation so that it's recorded in the system | • Form with material type dropdown<br>• Quantity input (weight in kg or unit count)<br>• Optional photo upload<br>• Submit button<br>• Loading state during submission | 5 | Critical | Ready |
| US-046 | As a user, I want to select from predefined material categories so that registration is quick | • Categories: Plastic, Glass, Paper/Cardboard, Metal/Aluminum, Electronics, Other<br>• Icon for each category<br>• Single selection (radio buttons or dropdown)<br>• Clear visual feedback on selection | 2 | Critical | Ready |
| US-047 | As a user, I want to receive immediate feedback upon submitting a donation so that I know it was successful | • Success message with donation ID<br>• Summary: material type, weight, points earned (if MVP2)<br>• "View History" button<br>• "Donate More" button<br>• Celebration animation/confetti | 3 | High | Ready |
| US-048 | As a user, I want validation to prevent errors so that my data is accurate | • Required field validation<br>• Weight/quantity must be > 0<br>• Material type selection required<br>• Error messages per field<br>• Prevent duplicate submissions | 3 | High | Ready |

**Feature Total:** 13 Story Points

---

#### **Feature: F-015 - Invalid Donation Handling**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-049 | As a system, I must detect invalid donations so that contamination is discouraged | • Admin/sensor can flag donation as invalid<br>• Validation rules: food-contaminated, non-recyclables<br>• Detection triggered by manual review or sensor (future)<br>• Invalid flag stored in database | 3 | High | Ready |
| US-050 | As a user who submits an invalid donation, I should be informed so that I can correct my behavior | • Error message explaining invalidity<br>• Educational tip on proper recycling<br>• Points deduction notification (temporary penalty for MVP1)<br>• Link to educational content | 3 | High | Ready |
| US-051 | As a system, I must not register invalid donations in the user's history so that statistics remain accurate | • Invalid donations marked as "rejected"<br>• Do not count toward total kg donated<br>• Logged for analytics but separate from success history<br>• User can view rejected donations separately | 2 | Medium | Ready |

**Feature Total:** 8 Story Points

---

#### **Feature: F-016 - Donation History View**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-052 | As a user, I want to view my donation history so that I can track my recycling activity | • List of all donations<br>• Display: date, time, material type, weight, EcoPoint name, status, points<br>• Pagination or infinite scroll<br>• Most recent first (default sort) | 3 | High | Ready |
| US-053 | As a user, I want to filter my donation history so that I can find specific entries | • Filter by date range (date picker)<br>• Filter by material type (checkboxes)<br>• Filter by EcoPoint location (dropdown)<br>• Sort options: newest/oldest, highest/lowest weight<br>• Clear filters button | 3 | High | Ready |
| US-054 | As a user, I want to see my total recycling impact so that I can understand my contribution | • Aggregate stats: total kg donated, total donations count<br>• Environmental impact: CO2 saved (kg), water conserved (liters)<br>• Visual representation (progress bars, charts)<br>• Comparison to average user (optional) | 2 | Medium | Ready |

**Feature Total:** 8 Story Points

---

#### **Feature: F-017 - Donation Details**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-055 | As a user, I want to view details of a specific donation so that I can review it | • Display: donation ID, timestamp, EcoPoint (with address)<br>• Material type, weight/quantity<br>• Photo (if uploaded)<br>• Points earned, status<br>• Map showing EcoPoint location | 2 | Medium | Ready |
| US-056 | As a user, I want to share my donation on social media so that I can inspire others | • Share button generates image with donation stats<br>• Branded template with Ecolink logo<br>• Share to: Instagram, Facebook, Twitter<br>• Copy link option<br>• Share count tracking | 3 | Low | Ready |

**Feature Total:** 5 Story Points

**Epic EP-005 Total:** 34 Story Points

---

### **EP-010: Backend Services & API**

#### **Feature: F-029 - Core API Endpoints**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-091 | As a developer, I want RESTful API endpoints for all core entities so that the frontend can interact with the backend | • Endpoints for: users, ecopoints, donations, sessions<br>• Standard HTTP methods: GET, POST, PUT, DELETE<br>• JSON request/response format<br>• Consistent URL structure (/api/v1/...) | 8 | Critical | Ready |
| US-092 | As a system, I must validate all API requests so that data integrity is maintained | • Request schema validation (Joi/Yup/Zod)<br>• Error responses with field-level details<br>• Sanitization of inputs (prevent injection)<br>• Validation middleware for all endpoints | 5 | Critical | Ready |
| US-093 | As a developer, I want API documentation so that integration is straightforward | • OpenAPI/Swagger documentation<br>• Interactive API explorer<br>• Example requests/responses<br>• Authentication guide<br>• Error code reference | 5 | High | Ready |
| US-094 | As a system, I must handle errors gracefully so that clients receive meaningful feedback | • Standardized error format: {code, message, details}<br>• Appropriate HTTP status codes<br>• Error logging with stack traces<br>• User-friendly error messages | 3 | High | Ready |

**Feature Total:** 21 Story Points

---

#### **Feature: F-030 - Authentication & Authorization Middleware**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-095 | As a system, I must authenticate API requests so that only authorized users access protected endpoints | • JWT verification middleware<br>• Bearer token extraction from headers<br>• Token expiration validation<br>• 401 Unauthorized for invalid tokens | 5 | Critical | Ready |
| US-096 | As a system, I must authorize requests based on user roles so that permissions are enforced | • Role-based middleware: requireAuth, requireAdmin, requireCooperative<br>• 403 Forbidden for insufficient permissions<br>• Role checking against JWT claims<br>• Permission matrix documented | 5 | Critical | Ready |
| US-097 | As a system, I must rate-limit API requests so that abuse is prevented | • Rate limiting middleware (express-rate-limit)<br>• 100 requests/minute per IP (configurable)<br>• 429 Too Many Requests response<br>• Different limits per endpoint type<br>• Bypass for authenticated admins | 3 | High | Ready |

**Feature Total:** 13 Story Points

---

#### **Feature: F-031 - Database Schema**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-098 | As a developer, I want a normalized database schema so that data is efficiently stored | • Collections/Tables: users, ecopoints, donations, sessions, badges, content, credits<br>• Relationships defined (foreign keys or references)<br>• Indexes on frequently queried fields<br>• Schema documentation | 8 | Critical | Ready |
| US-099 | As a system, I must ensure data consistency so that referential integrity is maintained | • Foreign key constraints (or MongoDB references)<br>• Cascading deletes where appropriate<br>• Transaction support for critical operations<br>• Data validation at database level | 3 | Critical | Ready |
| US-100 | As a developer, I want database migrations so that schema changes are versioned | • Migration tool: migrate-mongo or Sequelize migrations<br>• Up/down migration scripts<br>• Migration history tracking<br>• Rollback capability<br>• Seed data for development | 2 | High | Ready |

**Feature Total:** 13 Story Points

---

#### **Feature: F-032 - Data Access Layer**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-101 | As a developer, I want ORM/ODM abstraction so that database operations are simplified | • Mongoose (MongoDB) or Sequelize (PostgreSQL)<br>• Model definitions with validation<br>• Query methods: find, create, update, delete<br>• Virtual fields and hooks<br>• Relationship management | 5 | High | Ready |
| US-102 | As a system, I must log database queries in development so that debugging is easier | • Query logging in development mode only<br>• Performance metrics: query time<br>• Slow query alerts (>100ms)<br>• Query parameter logging<br>• Toggle via environment variable | 3 | Medium | Ready |

**Feature Total:** 8 Story Points

**Epic EP-010 Total:** 55 Story Points

---

### **EP-011: Frontend Architecture & State Management**

#### **Feature: F-033 - Component Architecture**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-103 | As a developer, I want a component-based architecture so that code is reusable | • Folder structure: components/, pages/, layouts/, hooks/, utils/<br>• Clear separation of concerns<br>• Reusable components isolated<br>• Props documentation<br>• Component naming conventions | 5 | Critical | Ready |
| US-104 | As a developer, I want shared components so that UI is consistent | • Component library: Button, Input, Card, Modal, Badge, Avatar, Loading, Error<br>• Storybook for component documentation<br>• Prop types/TypeScript interfaces<br>• Variants and themes support | 5 | High | Ready |
| US-105 | As a developer, I want routing configured so that navigation works | • React Router setup<br>• Route definitions for all pages<br>• Protected routes (auth required)<br>• 404 page<br>• Route transitions/animations<br>• Breadcrumbs | 3 | Critical | Ready |

**Feature Total:** 13 Story Points

---

#### **Feature: F-034 - State Management**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-106 | As a developer, I want global state management so that data flows predictably | • Context API or Redux setup<br>• Auth state: user, token, isAuthenticated<br>• App state: loading, errors<br>• Persistent state synced with localStorage<br>• State update patterns documented | 5 | High | Ready |
| US-107 | As a developer, I want API integration hooks so that data fetching is standardized | • Custom hooks: useAuth, useDonations, useEcoPoints<br>• Loading and error states handled<br>• Automatic retry on failure<br>• Request cancellation on unmount<br>• Caching strategy | 3 | High | Ready |

**Feature Total:** 8 Story Points

---

#### **Feature: F-035 - CI/CD Configuration**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-108 | As a developer, I want automated testing so that regressions are caught early | • Jest + React Testing Library setup<br>• Unit tests for utilities and hooks<br>• Integration tests for components<br>• >80% code coverage target<br>• Test reports generated | 5 | High | Ready |
| US-109 | As a team, we want CI/CD pipeline so that deployment is automated | • GitHub Actions workflow configured<br>• Run tests on every PR<br>• Deploy to staging on merge to develop<br>• Deploy to production on release tag<br>• Environment-specific configurations | 3 | High | Ready |

**Feature Total:** 8 Story Points

**Epic EP-011 Total:** 29 Story Points (Adjusted: 21 for MVP1 core, 8 for testing/deployment)

---

### **EP-012: Security & Data Protection**

#### **Feature: F-036 - Security Hardening**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-110 | As a system, I must protect against common vulnerabilities so that user data is secure | • Helmet.js for security headers (CSP, X-Frame-Options, etc.)<br>• CORS configuration (whitelist origins)<br>• SQL/NoSQL injection prevention<br>• XSS protection (input sanitization)<br>• CSRF tokens for state-changing operations | 5 | Critical | Ready |
| US-111 | As a system, I must encrypt sensitive data so that privacy is maintained | • Bcrypt for password hashing (10 rounds minimum)<br>• HTTPS enforced in production<br>• Encrypted environment variables<br>• Secure session storage (HTTP-only cookies)<br>• TLS 1.3 minimum | 5 | Critical | Ready |
| US-112 | As a system, I must log security events so that threats can be detected | • Log failed login attempts<br>• Suspicious activity alerts (multiple failed logins, unusual patterns)<br>• Audit trail for sensitive operations (admin actions, data changes)<br>• Log retention policy: 90 days<br>• Secure log storage | 3 | High | Ready |

**Feature Total:** 13 Story Points

---

#### **Feature: F-037 - Privacy Controls**

| ID | User Story | Acceptance Criteria | Story Points | Priority | Status |
|----|------------|---------------------|--------------|----------|--------|
| US-113 | As a user, I want to control my data so that my privacy is protected | • Data export option (download as JSON)<br>• Account deletion with confirmation<br>• Consent management for data processing<br>• Privacy policy acceptance on registration<br>• LGPD compliance notices | 5 | High | Ready |
| US-114 | As a system, I must anonymize data for analytics so that privacy is preserved | • No personally identifiable information in analytics<br>• Aggregate statistics only<br>• Opt-out mechanism for analytics<br>• Data retention policies enforced<br>• Anonymization scripts documented | 3 | Medium | Ready |

**Feature Total:** 8 Story Points

**Epic EP-012 Total:** 21 Story Points

---

## 3. MVP1 Sprint Allocation

### **Sprint 1 (Weeks 1-2): Foundation & Authentication**
**Focus:** Project setup, backend foundation, authentication

| Epic | Features | User Stories | Story Points |
|------|----------|--------------|--------------|
| EP-010 | F-029, F-030, F-031 | US-091 to US-100 | 47 |
| EP-001 | F-001 | US-001 to US-004 | 13 |
| **Total** | **5** | **13** | **60** (Reduced to ~42 for realistic sprint) |

**Adjusted Sprint 1:** US-091 to US-100, US-001 to US-004 (~42 points)

---

### **Sprint 2 (Weeks 3-4): User Management & UI Framework**
**Focus:** Complete authentication, start UI components

| Epic | Features | User Stories | Story Points |
|------|----------|--------------|--------------|
| EP-001 | F-002, F-003, F-004 | US-005 to US-013 | 29 |
| EP-011 | F-033 | US-103 to US-105 | 13 |
| **Total** | **4** | **12** | **42** |

---

### **Sprint 3 (Weeks 5-6): UI Screens & Navigation**
**Focus:** Build main UI screens and navigation

| Epic | Features | User Stories | Story Points |
|------|----------|--------------|--------------|
| EP-002 | F-005, F-006, F-007 | US-014 to US-022 | 24 |
| EP-011 | F-034 | US-106, US-107 | 8 |
| EP-010 | F-032 | US-101, US-102 | 8 |
| **Total** | **5** | **12** | **40** |

---

### **Sprint 4 (Weeks 7-8): EcoPoint Discovery**
**Focus:** Map integration, EcoPoint features

| Epic | Features | User Stories | Story Points |
|------|----------|--------------|--------------|
| EP-003 | F-009, F-010, F-011 | US-026 to US-036 | 29 |
| EP-002 | F-008 | US-023 to US-025 | 8 |
| **Total** | **4** | **14** | **37** |

---

### **Sprint 5 (Weeks 9-10): QR Code & Donation Flow**
**Focus:** QR scanning, donation registration

| Epic | Features | User Stories | Story Points |
|------|----------|--------------|--------------|
| EP-004 | F-012, F-013 | US-037 to US-044 | 21 |
| EP-005 | F-014, F-015 | US-045 to US-051 | 21 |
| **Total** | **4** | **15** | **42** |

---

### **Sprint 6 (Weeks 11-12): History, Security & Finalization**
**Focus:** Donation history, security hardening, UAT

| Epic | Features | User Stories | Story Points |
|------|----------|--------------|--------------|
| EP-005 | F-016, F-017 | US-052 to US-056 | 13 |
| EP-012 | F-036, F-037 | US-110 to US-114 | 21 |
| EP-011 | F-035 | US-108, US-109 | 8 |
| **Total** | **5** | **13** | **42** |

---

## 4. MVP1 Summary

### **Effort Distribution by Epic**

| Epic ID | Epic Name | Story Points | % of Total | Priority |
|---------|-----------|--------------|------------|----------|
| EP-010 | Backend Services & API | 55 | 21.8% | Critical |
| EP-001 | User Authentication & Profile Management | 42 | 16.7% | Critical |
| EP-005 | Donation Registration & Validation | 34 | 13.5% | Critical |
| EP-002 | User Interface & Experience Design | 32 | 12.7% | Critical |
| EP-003 | EcoPoint Location & Discovery | 29 | 11.5% | Critical |
| EP-004 | QR Code Access & Kiosk Integration | 21 | 8.3% | Critical |
| EP-012 | Security & Data Protection | 21 | 8.3% | Critical |
| EP-011 | Frontend Architecture & State Management | 21 | 8.3% | Critical |
| **Total** | **8 Epics** | **252** | **100%** | **—** |

---

### **Story Point Distribution by Sprint**

| Sprint | Weeks | Planned Story Points | Theme |
|--------|-------|---------------------|-------|
| Sprint 1 | 1-2 | 42 | Foundation & Authentication |
| Sprint 2 | 3-4 | 42 | User Management & UI Framework |
| Sprint 3 | 5-6 | 40 | UI Screens & Navigation |
| Sprint 4 | 7-8 | 37 | EcoPoint Discovery |
| Sprint 5 | 9-10 | 42 | QR Code & Donation Flow |
| Sprint 6 | 11-12 | 42 | History, Security & Finalization |
| **Total** | **12 weeks** | **245** | **MVP1 Complete** |

*Note: 7 points reserved for bug fixes and UAT adjustments*

---

### **Priority Breakdown**

| Priority | User Stories | Story Points | % of Total |
|----------|--------------|--------------|------------|
| Critical | 38 | 158 | 62.7% |
| High | 24 | 79 | 31.3% |
| Medium | 6 | 15 | 6.0% |
| Low | 0 | 0 | 0% |
| **Total** | **68** | **252** | **100%** |

---

## 5. Definition of Ready (DoR)

Before a user story enters a sprint, it must meet these criteria:

- ✅ Acceptance criteria clearly defined
- ✅ Dependencies identified and resolved
- ✅ Design mockups available (for UI stories)
- ✅ Technical approach discussed and agreed upon
- ✅ Story points estimated by the team
- ✅ No external blockers
- ✅ Test scenarios outlined

---

## 6. Definition of Done (DoD)

A user story is considered complete when:

- ✅ Code written and peer-reviewed
- ✅ Unit tests written (>80% coverage for new code)
- ✅ Integration tests pass
- ✅ Acceptance criteria validated
- ✅ Documentation updated (code comments, API docs, user guides)
- ✅ Deployed to staging environment
- ✅ Product Owner acceptance
- ✅ No critical or high-severity bugs

---

## 7. Risk Register

| Risk ID | Risk Description | Probability | Impact | Mitigation Strategy | Owner |
|---------|------------------|-------------|--------|---------------------|-------|
| R-001 | QR code hardware incompatibility | Medium | High | Early hardware testing, manual code entry fallback (US-040) | Tech Lead |
| R-002 | Map API cost overruns | Low | Medium | Monitor API usage, implement caching, consider alternative providers | Backend Lead |
| R-003 | Performance issues under load | Medium | Medium | Load testing in Sprint 5-6, optimize database queries | Backend Lead |
| R-004 | Security vulnerabilities | Low | Critical | Security audit in Sprint 6, penetration testing before production | Security Engineer |
| R-005 | Team velocity below estimates | Medium | High | 20% buffer in planning, prioritize ruthlessly, reduce scope if needed | Project Manager |
| R-006 | Integration delays (maps, payments) | Medium | Medium | Early POC for critical integrations, fallback plans | Tech Lead |

---

## 8. Success Metrics

### **Delivery Metrics**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Sprint Velocity | 40-42 points/sprint | Actual story points completed |
| Sprint Completion Rate | >90% | Stories completed vs. planned |
| Defect Density | <5 bugs per 100 story points | Bug tracking system |
| Code Coverage | >80% | Automated testing tools |
| Production Incidents | 0 critical, <2 high | Incident log |

---

### **Quality Metrics**

| Metric | Target | Measurement |
|--------|--------|-------------|
| UAT Pass Rate | >90% | Test case results |
| Performance (API) | <500ms (p95) | APM tools |
| Performance (Frontend) | <2s FCP | Lighthouse |
| Security Score | A grade | OWASP ZAP scan |
| Accessibility Score | >90 | Lighthouse accessibility audit |

---

### **User Metrics (First 30 Days Post-Launch)**

| Metric | Target | Stretch Goal |
|--------|--------|--------------|
| User Registrations | 200 | 500 |
| Active Users (Weekly) | 50 | 150 |
| Donations Registered | 300 | 800 |
| QR Scan Success Rate | >90% | >95% |
| Mobile Users | >70% | >80% |

---

## 9. Notes & Assumptions

### **Technical Assumptions**
- Node.js 18+ and React 18+ will be used
- MongoDB or PostgreSQL for database (decision to be made in Sprint 1)
- Deployment on cloud infrastructure (AWS, GCP, or Azure)
- Mobile-first development approach
- API-first architecture

### **Business Assumptions**
- UnB administration support confirmed
- At least 1 EcoPoint available for MVP1 launch
- Waste picker cooperatives engaged for future content (MVP2)

### **Out of Scope for MVP1**
- Points and credits system (MVP2)
- Gamification features (MVP2)
- Educational content CMS (MVP2)
- Push notifications
- Offline mode / PWA
- Multi-language support (only PT-BR)
- Advanced analytics dashboard

---

## 10. Revision History

| Date | Version | Author | Changes |
|------|---------|--------|---------|
| 2025-10-07 | 1.0 | [Mateus Vieira](https://github.com/matix0) | Initial MVP1 user story document with complete acceptance criteria and sprint allocation |

---

[← Back to Product](./overview.md) | [← Back to Backlog](./product-backlog.md) | [← Back to Main Page](../../index.md)
