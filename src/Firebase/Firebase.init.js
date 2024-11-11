// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAghBqUTC1ImeOLX_E_7EIFHu2jezxqK6Y",
  authDomain: "auth-context-28efd.firebaseapp.com",
  projectId: "auth-context-28efd",
  storageBucket: "auth-context-28efd.firebasestorage.app",
  messagingSenderId: "568733226476",
  appId: "1:568733226476:web:d0d89ced8274d027555cc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);