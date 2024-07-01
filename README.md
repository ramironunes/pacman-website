# PAC-MAN Website

## Introduction

PAC-MAN is a classic arcade game developed by Namco and first released in Japan on May 22, 1980. Created by game designer Toru Iwatani, PAC-MAN was intended to appeal to a broad audience by featuring a non-violent, maze-chase gameplay that contrasted sharply with the space shooter games popular at the time. The game became a cultural icon and a milestone in video game history, renowned for its innovative design, charming character, and widespread popularity.

## Project Overview

This project aims to build a comprehensive website dedicated to the game PAC-MAN. The website will include the following features:

1. **PAC-MAN Game**: A full implementation of the PAC-MAN game, allowing users to play directly on the site.
2. **AI Autonomy**: Development and integration of an artificial intelligence that can play PAC-MAN autonomously, tested in various scenarios to evaluate its performance.
3. **Data Analysis**: Display of gameplay statistics and other relevant data.

The project utilizes Docker to manage the application, encompassing frontend (Angular), backend (FastAPI), and database (PostgreSQL) components.

## Configuration and Execution

### Prerequisites

- Docker
- Docker Compose

### Setup Steps

1. **Clone the Repository**:

    ```sh
    git clone git@github.com:ramironunes/pacman-website.git
    cd pacman-website
    ```

2. **Initialize Submodules**:

    ```sh
    git submodule init
    git submodule update
    ```

3. **Build and Run Containers**:

    ```sh
    docker compose up --build
    ```

## Technologies Used

### Backend (FastAPI)

- **Language**: Python
- **Framework**: FastAPI
- **Dependencies**: Managed via `requirements.txt`
- **Port**: 8000

### Frontend (Angular)

- **Language**: TypeScript
- **Framework**: Angular
- **Dependencies**: Managed via `package.json`
- **Port**: 8080

### Database (PostgreSQL)

- **Image**: `postgres:16`
- **Port**: 5432
- **Environment Variables**:
  - `POSTGRES_USER`: postgres
  - `POSTGRES_PASSWORD`: postgres
  - `POSTGRES_DB`: pacman

## Docker Compose Configuration

The `docker-compose.yml` file is used to define and manage the Docker containers for the backend, frontend, and database.
