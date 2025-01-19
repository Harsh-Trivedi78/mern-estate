// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-21e26.firebaseapp.com",
  projectId: "mern-estate-21e26",
  storageBucket: "mern-estate-21e26.firebasestorage.app",
  messagingSenderId: "925962797944",
  appId: "1:925962797944:web:541ab2b3b8d6ea2afbfe8d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);