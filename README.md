# TechStack Library

TechStack Library is a web-based application for managing a collection of eBooks. This project includes a frontend built with Angular and a backend developed using Spring Boot. The application provides features like viewing featured eBooks, managing an eBook catalog, and adding eBooks to a cart.

---

## Features

- **Frontend**: Angular-based UI with components for featured items, home page, and detailed eBook display.
- **Backend**: RESTful API built using Spring Boot to handle CRUD operations for eBooks.
- **Database**: Persisting eBook data using a relational database (e.g., H2, MySQL, or PostgreSQL).
- **API Integration**: Communication between the Angular frontend and the Spring Boot backend using HTTP requests.
- **Cart Management**: Add, view, and clear items in a shopping cart.

---

## Tech Stack

### Frontend:
- Angular
- TypeScript
- HTML & CSS

### Backend:
- Spring Boot
- Java
- Spring Data JPA

### Database:
- H2 (in-memory database for testing, can be switched to MySQL/PostgreSQL for production)

---

## Prerequisites

- **Frontend Requirements**:
  - Node.js (>=14.x)
  - Angular CLI (>=12.x)

- **Backend Requirements**:
  - Java 11 or higher
  - Maven 3.6 or higher

---

## Getting Started

### 1. Clone the Repository
```bash
https://github.com/naveenlingala11/TechStackLibrary.git
cd TechStackLibrary
```

### 2. Backend Setup

#### a. Navigate to the Backend Directory:
```bash
cd backend
```

#### b. Update `application.properties` for Database Configuration:
```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
```

#### c. Run the Spring Boot Application:
```bash
mvn spring-boot:run
```
The backend server will be available at `http://localhost:8080`.

### 3. Frontend Setup

#### a. Navigate to the Frontend Directory:
```bash
cd frontend
```

#### b. Install Dependencies:
```bash
npm install
```

#### c. Run the Angular Application:
```bash
ng serve
```
The frontend application will be available at `http://localhost:4200`.

---

## API Endpoints

### eBook Endpoints
- **GET /api/ebooks**: Fetch all eBooks
- **GET /api/ebooks/{id}**: Fetch eBook by ID
- **POST /api/ebooks**: Add a new eBook
- **PUT /api/ebooks/{id}**: Update an existing eBook
- **DELETE /api/ebooks/{id}**: Delete an eBook

---

## Folder Structure

```
TechStackLibrary
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   ├── com.techstack.library
│   │   │   │       ├── model
│   │   │   │       ├── controller
│   │   │   │       ├── service
│   │   │   │       ├── repository
│   │   └── resources
│   │       └── application.properties
│   └── pom.xml
├── frontend
│   ├── src
│   │   ├── app
│   │   │   ├── components
│   │   │   │   ├── featured-item
│   │   │   │   ├── home
│   │   │   │   └── shared
│   │   ├── assets
│   │   └── environments
│   └── package.json
└── README.md
```

---

## Future Enhancements

- Implement authentication and user management.
- Add payment gateway integration for purchasing eBooks.
- Enhance search and filtering functionality.
- Implement unit and integration testing for both frontend and backend.

---

## Contribution

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## Test
Automated through webhook

