# NextUp - To-Do Application

This project is a small to-do task web application. It features a modern, containerized architecture with a React frontend, a Node.js (Express) backend, and a MySQL database.

## System Architecture

The application is composed of three main services, all orchestrated by Docker Compose:
1.  **Frontend:** A single-page application (SPA) built with React and styled with Tailwind CSS. It communicates with the backend via a REST API.
2.  **Backend:** A RESTful API built with Node.js and Express.js. It handles business logic and facilitates communication between the frontend and the database. It uses Sequelize as an ORM.
3.  **Database:** A MySQL 8.0 relational database for persisting task data.

## Features

*   **Create Tasks:** Users can add new tasks by providing a title and a description.
*   **View Recent Tasks:** The UI displays the 5 most recent, uncompleted tasks.
*   **Mark as Complete:** Users can mark a task as "Done," which removes it from the active task list.
*   **Dynamic API:** The backend API supports fetching a dynamic number of tasks using query parameters.

## Tech Stack

* Database: MySQL 8.0

* Backend: Node.js + Express (REST API)

* Frontend: React (SPA) served via Nginx

* All components are containerized and orchestrated using docker-compose.

## Prerequisites

You must have the following software installed on your system:

* Docker

## Running the Application

1. Clone the repository:

    git clone https://github.com/binuri-mindula/ToDoApp.git

    cd project-root

2. Build and start all services:

    docker-compose up --build

3. Access the app:

    Frontend UI → http://localhost:3000

    Backend API → http://localhost:3001

    Database → localhost:3307 (MySQL)

4. Stopping the Application
   
   docker-compose down

5. Testing

   Backend Tests: Run inside the backend container

      docker exec -it backend_api npm test

   Frontend Tests:
   
      docker exec -it frontend_ui npm test

## Future Improvements

* End-to-end tests (Cypress/Playwright)

* Improved UI styling

* Deployment with CI/CD pipeline
