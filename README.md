#  Onboard Mission Control

A **real-time telemetry dashboard** for monitoring micro-rocket systems during flight. This project simulates a ground control station that receives, processes, stores, and visualizes live sensor data with high reliability and efficiency.

---

##  Overview

Onboard Mission Control enables real-time tracking of critical flight parameters such as altitude, velocity, temperature, pressure, and orientation. It is built using a full-stack architecture with low-latency communication and efficient data handling.

---

##  Tech Stack

###  Frontend
- HTML5  
- CSS3  
- JavaScript  

###  Backend
- Node.js  
- Express.js  
- Socket.IO (WebSockets for real-time communication)  

###  Database
- MySQL  

---

##  Features

-  Real-time telemetry streaming using WebSockets  
-  Live dashboard UI for sensor data visualization  
-  SQL-based data storage for telemetry logs  
-  Console panel for real-time logging  
-  Optimized data handling (~30% efficiency improvement)  
-  Reliable data transfer system  

---

## UI Preview

![Dashboard Screenshot](./assets/dashboard.png)

---

##Project Structure

onboard-mission-control/
│
├── server/
│   ├── server.js
│   ├── db.js
│   ├── routes/
│   └── sockets/
│
├── client/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── package.json
└── README.md

---

## ⚙️ Installation & Setup

### 1. Clone the repository

### 2. Install dependencies

### 3. Setup MySQL Database
Run the following SQL commands:
CREATE DATABASE telemetry_db;

USE telemetry_db;

CREATE TABLE telemetry_data (
id INT AUTO_INCREMENT PRIMARY KEY,
temperature FLOAT,
pressure FLOAT,
altitude FLOAT,
velocity FLOAT,
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


### 4. Start backend server
npx nodemon server/server.js


### 5. Run frontend
Open:
client/index.html
in your browser.

---

##  Data Flow Architecture

Sensors (Simulated)
        ↓
Node.js Backend (API + WebSockets)
        ↓
MySQL Database (Storage)
        ↓
Frontend Dashboard (Live UI)

---

##  Future Enhancements

-  Real-time graphs using Chart.js  
-  Anomaly detection using Machine Learning  
-  Integration with hardware sensors (Arduino/Raspberry Pi)  
-  Cloud deployment (AWS / Render)  
-  Authentication system  
-  Export telemetry data (CSV/JSON)  

---

##  Use Cases

-  Rocket telemetry systems  
-  IoT monitoring dashboards  
-  Real-time data streaming applications  
-  Industrial monitoring systems  

---

##  Author

**Vaibhav**  
M.Tech, Delhi Technological University (DTU)

---

##  Acknowledgment

This project was developed as part of a B.Tech project to explore real-time systems, full-stack development, and telemetry data processing.

---

## Feedback

Feel free to open issues or contribute to the project.

---
