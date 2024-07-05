# Tetris

## Introduction

Tetris is a classic tile-matching puzzle game originally designed and programmed by Soviet Russian software engineer Alexey Pajitnov. It was released on June 6, 1984, and has since become one of the most iconic and widely recognized video games in history. The game involves different shaped tetrominoes that fall into a playfield, and the objective is to manipulate these shapes to form complete lines, which then disappear, earning the player points.

## Project Overview

This project aims to build a comprehensive website dedicated to the game Tetris. The website will include the following features:

1. **Tetris Game**: A full implementation of the Tetris game, allowing users to play directly on the site.
2. **AI Autonomy**: Development and integration of an artificial intelligence that can play Tetris autonomously, tested in various scenarios to evaluate its performance.
3. **Data Analysis**: Display of gameplay statistics and other relevant data.

The project utilizes Docker to manage the application, encompassing frontend (Angular), backend (FastAPI), and database (PostgreSQL) components.

## Configuration and Execution

### Prerequisites

- Docker
- Docker Compose

### Setup Steps

1. **Clone the Repository**:

    ```sh
    git clone git@github.com:ramironunes/tetris-website.git
    cd tetris-website
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
- **Port**: 4200

### Database (PostgreSQL)

- **Image**: `postgres:16`
- **Port**: 5432
- **Environment Variables**:
  - `POSTGRES_USER`: postgres
  - `POSTGRES_PASSWORD`: postgres
  - `POSTGRES_DB`: tetris

## Docker Compose Configuration

The `docker-compose.yml` file is used to define and manage the Docker containers for the backend, frontend, and database.
