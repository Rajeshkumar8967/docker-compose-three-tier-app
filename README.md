# Docker Compose 3-Tier Application

## Overview

This project demonstrates containerization and deployment of a
three-tier web application using Docker Compose.

## Architecture

Frontend:
Nginx + HTML

Backend:
Node.js + Express

Database:
MongoDB

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
