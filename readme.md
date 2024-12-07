# Train Booking System API

This is a Train Booking System API built with Express.js and Sequelize, designed to manage user registrations, train bookings, and seat availability.

## Project Structure

- `server.js`: The main entry point of the application.
- `config/database.js`: Database configuration using Sequelize.
- `models/`: Contains Sequelize models for User, Train, and Booking.
- `controllers/`: Contains logic for handling requests related to authentication, train management, and bookings.
- `routes/`: Defines API endpoints and associates them with controllers.
- `middleware/`: Contains middleware for authentication and admin authorization.
- `package.json`: Contains project metadata and dependencies.

## Prerequisites

- Node.js (version 14 or later)
- npm (Node Package Manager)
- PostgreSQL database


# API Endpoints
- **Authentication**
  - **POST /auth/register:** Register a new user.POST 
  - **POST /auth/login:** Login and receive a JWT token.
- **Train Management**
  - **POST**/trains/create: Create a new train (Admin only). 
  - **GET** /trains/availability: Check train availability (Authenticated users).
- **Booking Management**
    - **POST** /bookings/book: Book a seat on a train (Authenticated users).
    - **GET**/bookings/details: Get booking details for the logged-in user (Authenticated users).
## Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd train-booking-system
   ```
2. **Install dependenciesRun the following command to install all necessary dependencies:**
    ```bash
    npm install
    ```
3. **Configure environment variablesCreate a .env file in the root directory and add the following environment variables:**
   
    ```bash
    DATABASE_URL=your_database_url
    JWT_SECRET=your_jwt_secret
    ADMIN_API_KEY=your_admin_api_key
    PORT=your_port_number
    ```
    Replace your_database_url, your_jwt_secret, your_admin_api_key, and your_port_number with your actual configuration values.
4. **Set up the database**
    Ensure your PostgreSQL database is running and accessible. The Sequelize models will automatically sync with the database when the server starts.
5. **Run the applicationStart the server using the following command:**
   ```bash
   npm start
   ```
   For development purposes, you can use:
   ```bash
   npm run dev
   ```
6. **Access the API**
    You can access the API endpoints using a tool like Postman or via your browser. The base URL will be http://localhost:port.

# License

- This project is licensed under the MIT License.
