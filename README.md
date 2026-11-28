# 🏦 Bank Transaction System

A backend-based Bank Transaction Management System built using **Node.js, Express.js, and MongoDB**. This project focuses on implementing backend concepts such as user authentication, account management, transaction processing, ledger management, balance validation, and secure API development.

The project was developed as a practical implementation of backend development concepts, with an emphasis on understanding how banking operations can be managed through REST APIs.

## 🚀 Features

### 1. User Authentication
- User registration and login.
- Email validation using Regular Expressions.
- Password hashing using bcrypt.
- Password comparison during authentication.
- JWT-based authentication.
- Cookie-based token handling.
- Authentication middleware.
- Email verification using Nodemailer.

### 2. Account Management
- Bank account creation and management.
- Account model and database integration.
- Account status validation.
- Protected account operations.

### 3. Transaction Management
- Transaction and ledger models.
- Transaction creation and processing.
- Pending transaction handling.
- Idempotency validation to prevent duplicate transaction processing.
- Account balance validation.
- Sender balance calculation using MongoDB aggregation pipelines.
- Transaction email notifications.
- Balance fetching API.

### 4. Security and Session Management
- JWT-based authentication.
- Password hashing using bcrypt.
- Protected routes using authentication middleware.
- Token blacklist management.
- Logout functionality.
- Environment variable configuration.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime environment |
| Express.js | Backend framework and REST API development |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling |
| JWT | Authentication |
| bcrypt | Password hashing |
| Cookie Parser | Cookie handling |
| Nodemailer | Email notifications |
| Postman | API testing |
| Git & GitHub | Version control |

## 📁 Project Structure

```text
bank-transaction-system/
│
├── src/
│   ├── .postman/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── postman/
│   ├── routes/
│   ├── services/
│   └── app.js
│
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

### Folder Responsibilities

| Folder/File | Description |
|---|---|
| `config/` | Database and application configuration |
| `controllers/` | Handles incoming requests and application logic |
| `middleware/` | Authentication and request-processing middleware |
| `models/` | MongoDB database schemas and models |
| `postman/` | Postman-related API testing resources |
| `routes/` | Defines application API endpoints |
| `services/` | Contains reusable application and business logic |
| `app.js` | Express application configuration |
| `server.js` | Backend server entry point |
| `.env` | Stores environment variables |
| `.gitignore` | Specifies files and folders excluded from Git |

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB Atlas account or a MongoDB instance
- Git
- Postman

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/bank-transaction-system.git
```

### 2. Navigate to the Project Directory

```bash
cd bank-transaction-system
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and configure the environment variables required by the application.

Example configuration:

```env
PORT=YOUR_PORT
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_JWT_SECRET
EMAIL_USER=YOUR_EMAIL_ADDRESS
EMAIL_PASS=YOUR_EMAIL_APP_PASSWORD
```

**Note:** The variable names above are illustrative. Use the exact environment variable names referenced in your source code.

Never upload your actual `.env` file or expose database credentials, email passwords, or JWT secrets on GitHub.

### 5. Start the Server

Run the development command configured in your `package.json`.

For example:

```bash
npm run dev
```

Alternatively, use the appropriate start command configured in your project.

## 🔌 API Modules

The application provides APIs for the following modules:

| Module | Functionality |
|---|---|
| Authentication | User registration, login and email verification |
| Account | Bank account creation and management |
| Transaction | Transaction creation and processing |
| Balance | Fetching account balance |
| Logout | Session termination and token blacklist management |

API endpoints can be tested using Postman.

Refer to the application route files for the exact HTTP methods, endpoint paths, request parameters and response formats.

## 🔐 Security Considerations

The project implements several security-related mechanisms:

- Password hashing using bcrypt.
- JWT-based user authentication.
- Cookie-based token handling.
- Authentication middleware for protected routes.
- Environment variables for sensitive configuration.
- Idempotency validation for transaction requests.
- Account status and balance validation.
- Token blacklist management.

**Disclaimer:** This is an educational backend project and is not intended for handling real financial transactions or production banking operations.

## 🧪 API Testing

Postman is used to test and verify the backend APIs.

The following scenarios are relevant to testing:

- User registration and login.
- Invalid email and password inputs.
- Authentication and protected routes.
- Account creation and account status validation.
- Transaction processing.
- Insufficient balance scenarios.
- Duplicate transaction requests.
- Pending transaction handling.
- Balance retrieval.
- Logout and token blacklist functionality.

## 📚 Key Learning Outcomes

Through this project, I gained practical experience with:

- Building REST APIs using Node.js and Express.js.
- Connecting backend applications to MongoDB.
- Implementing user authentication and authorization.
- Working with JWT and cookies.
- Password hashing and validation using bcrypt.
- Implementing middleware and controllers.
- Integrating email functionality using Nodemailer.
- Managing bank accounts and transactions.
- Understanding ledger-based transaction management.
- Working with MongoDB aggregation pipelines.
- Implementing idempotency validation.
- Testing APIs using Postman.
- Managing project versions using Git and GitHub.

## 🔮 Future Improvements

Potential enhancements for this project include:

- Role-based access control.
- Administrative dashboard.
- Advanced transaction filtering and reporting.
- Automated unit and integration testing.
- Improved audit logging.
- Enhanced transaction concurrency handling.
- API documentation using Swagger.
- Docker-based deployment.

## 👨‍💻 Author

**Prakash Agrawal**

GitHub: https://github.com/prakashagrl

---

⭐ If you find this project interesting, feel free to explore the repository and share your feedback.