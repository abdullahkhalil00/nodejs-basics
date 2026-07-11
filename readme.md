# Node.js Basics

This repository contains my Node.js practice projects and exercises while learning the fundamentals of Node.js.

## Topics Covered

* Node.js modules
* File System (fs)
* HTTP module
* Creating a basic HTTP server
* Handling routes
* Logging requests
* Asynchronous programming
* Working with callbacks

## Project

### Basic HTTP Server

This project demonstrates how to build a simple HTTP server using Node.js without any external libraries.

### Features

* Create an HTTP server
* Handle multiple routes
* Return different responses based on the requested URL
* Log every request to a file
* Understand asynchronous file operations

## Routes

| Route           | Response                        |
| --------------- | ------------------------------- |
| `/`             | Welcome to server               |
| `/about`        | I will tell you later I am busy |
| `/contact`      | Contact information             |
| Any other route | 404 Page Not Found              |

## Technologies

* Node.js
* HTTP Module
* File System Module

## How to Run

Clone the repository:

```bash
git clone https://github.com/abdullahkhalil00/nodejs-basics
```

Navigate to the project:

```bash
cd nodejs-basics
```

Start the server:

```bash
node index.js
```

Open your browser and visit:

```
http://localhost:8000
```

## Learning Goal

The purpose of this project is to understand the core concepts of Node.js before moving to frameworks like Express.js.
