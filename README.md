# Chat written in Go

This is a basic Go application with a React client. The Go application resides in the `backend/` directory and the ReactJS application resides in the `frontend/` directory.

### Prerequisites

- You will need Go version 1.11+ installed on your machine.
- You will need npm installed on your machine.
- You will need npx installed on your machine. This can be installed by typing `npm install -g npx`

### Client

Start the React client:

`cd frontend`

`npm ci`


### Backend

`cd backend`

`go run main.go`

Build the Docker image:

`docker build -t backend .`

`docker run -it -p 8080:8080 backend`

To stop the server, press `Ctrl+C` in the terminal where the server is running.

