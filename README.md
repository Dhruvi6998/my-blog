# My Blog  

A simple full-stack blogging application built with **Vite (React)** on the frontend and **Node.js + Express** on the backend.  

---

## Features
- Frontend: React (Vite) with API proxy setup  
- Backend: Node.js + Express with MongoDB  
- Firebase integration (using `credentials.json`)  
- Hot reloading for backend with Nodemon  

---

## Project Structure  
my-blog/
│── frontend/ # React + Vite frontend
│── backend/ # Node.js + Express backend
│── credentials.json # Firebase credentials (keep this private!)

## Frontend Setup  

Inside the `frontend` folder:  

### 1. Install dependencies  
npm install
2. Update vite.config.js
Modify vite.config.js to include API proxying so requests to /api hit your backend:
// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Your backend URL
        changeOrigin: true,
      },
    },
  },
};
3. Start frontend
npm run dev
Backend Setup
Inside the backend folder:

1. Install dependencies
npm install
2. Add dev script in package.json
Update your package.json to make backend startup easier:
"scripts": {
  "dev": "nodemon src/server.js"
}
Now you can start the backend with:
npm run dev
Firebase Setup
Go to your Firebase Console.

Create a project and generate Service Account Credentials.

Download the JSON file and save it as credentials.json in the root folder of your backend.

Important:

Do NOT commit credentials.json to GitHub.

Add it to .gitignore:
# Ignore Firebase credentials
credentials.json
Running the App
Start backend server:
cd backend
npm run dev
Start frontend:

cd frontend
npm run dev
Your app will now run on:

Frontend → http://localhost:5173

Backend → http://localhost:8000

Keep credentials.json private.

Use environment variables for production (e.g., .env).

Make sure MongoDB and Firebase are properly configured
