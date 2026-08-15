# Docker Compose 3-Tier Application

## Overview

This project demonstrates containerization and deployment of a
three-tier web application using Docker Compose.

# Docker Compose Three-Tier Application

A containerized three-tier web application demonstrating **Docker, Docker Compose, container networking, persistent storage, service health checks, and multi-container orchestration**.

## Architecture

-
                         Browser
                            │
                            ▼
                    ┌───────────────┐
                    │    Nginx      │
                    │   Frontend    │
                    │    :8080      │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ Node.js +     │
                    │ Express API   │
                    │   :5000       │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │    MongoDB    │
                    │     :27017    │
                    └───────────────┘


## Architecture Flow

Browser
↓
Nginx Frontend
↓
Node.js Backend
↓
MongoDB Database

## Docker Features Implemented

- Dockerfile
- Custom Docker images
- Docker Compose
- Multi-container deployment
- Docker volumes
- Custom Docker network
- Container health checks
- Docker Hub image publishing

## Services

### Frontend

Nginx serves the HTML application on port 8080.

### Backend

Node.js + Express provides the REST API on port 5000 internally.

### Database

MongoDB stores application data using a persistent Docker volume.

## Network

All services communicate through:

app-network

## Volume

MongoDB uses:

mongo-data

This allows database data to persist independently of the database container.

## Communication Test

The frontend calls:

/api/health

Nginx forwards the request to the backend.

The backend verifies MongoDB connectivity.

Successful response proves:

Frontend → Backend → MongoDB

communication.

## Docker Hub

Custom backend image:

rajeshkumar357/friday-docker-backend:v1

## Run the Application

```bash
docker compose up -d --build
