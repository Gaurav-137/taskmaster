# TaskMaster API 🚀

A collaborative task tracking and management backend system built with Node.js, Express, and MongoDB.

---

## 📌 Features

* 🔐 User Authentication (JWT-based)
* 👤 User Profile Management
* 📋 Task Management (CRUD)
* 🔍 Task Filtering & Search
* 👥 Team Collaboration
* 💬 Comments on Tasks
* 📅 Due Date Tracking

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (password hashing)

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/your-username/taskmaster.git
cd taskmaster
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4. Run Server

```bash
npm run dev
```

---

## 🔐 Authentication Flow

* Register → Receive JWT token
* Login → Receive JWT token
* Use token in headers:

```bash
Authorization: Bearer <token>
```

---

## 📡 API Endpoints

### Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### Tasks

* POST `/api/tasks`
* GET `/api/tasks`
* PUT `/api/tasks/:id`
* DELETE `/api/tasks/:id`

### Teams

* POST `/api/teams`
* POST `/api/teams/:id/join`

### Comments

* POST `/api/comments/:taskId`
* GET `/api/comments/:taskId`

---

## 🗂️ Database Schema

### User

* name
* email
* password

### Task

* title
* description
* status
* dueDate
* assignedTo

### Team

* name
* members

### Comment

* task
* user
* text

---

## 🚀 Future Improvements

* 🔔 Real-time notifications (Socket.io)
* 📎 File uploads (attachments)
* 🤖 AI-based task description generation
* 🌐 Deployment (AWS / Render)

---

## 👨‍💻 Author

Your Name

---

## 📎 Submission

GitHub Repo: https://github.com/your-username/taskmaster
