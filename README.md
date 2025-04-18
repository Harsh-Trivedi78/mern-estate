# 🏡 MERN Estate - Real Estate Web Application

MERN Estate is a modern, full-stack real estate platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and styled using Tailwind CSS. The platform allows users to seamlessly create, browse, and manage property listings with secure authentication and optimized user experience.

---

## 🚀 Features

- 🔐 **Authentication & Authorization**  
  Secure user sign-up/sign-in using JWT, with protected routes and user session handling.

- 🏘️ **Property Listings Management**  
  Users can add, update, and delete property listings with image uploads and live data updates.

- 🔎 **Advanced Search and Filters**  
  Powerful search functionality to browse listings based on keywords, categories, and location.

- 📱 **Fully Responsive UI**  
  Mobile-first design using Tailwind CSS ensures smooth usability across devices.

- ☁️ **Firebase Image Uploads**  
  Effortlessly store and retrieve images using Firebase’s real-time storage services.

---

## 🛠️ Tech Stack

### Frontend
- React.js (Hooks, Context API)
- React Router
- Tailwind CSS
- Firebase (Image Upload)
- Cloudinary

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication

---

## 📁 Project Structure

mern-estate/
├── backend/                     # Express server and API logic
│   ├── controllers/             # Route controller functions (auth, listings, etc.)
│   ├── models/                  # Mongoose schemas for User, Listing
│   ├── middleware/              # JWT authentication middleware
│   ├── routes/                  # API routes for authentication and listings
│   └── server.js                # Entry point for the backend server
│
├── frontend/                    # React application
│   └── src/
│       ├── assets/              # Images and static assets
│       ├── components/          # Reusable UI components (Navbar, ListingCard, etc.)
│       ├── pages/               # Page-level components (Home, SignIn, SignUp, etc.)
│       ├── App.js               # Main app component with routing
│       └── index.js             # React entry point
│
├── .gitignore                   # Git ignored files
├── package.json                 # Project metadata and dependencies
└── README.md                    # Project documentation





## 👨‍💻 Author

**Harsh Trivedi**  
📧 [trivediharsh346@gmail.com](mailto:trivediharsh346@gmail.com)  
🔗 [Portfolio](https://harsh-trivedi78.github.io/Portfolio)  
🐙 [GitHub](https://github.com/Harsh-Trivedi78)


