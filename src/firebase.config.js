// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "taskmanagementdashboard-47409.firebaseapp.com",
  projectId: "taskmanagementdashboard-47409",
  storageBucket: "taskmanagementdashboard-47409.appspot.com",
  messagingSenderId: "217237399747",
  appId: "1:217237399747:web:475f59309edc4666795a76",
  measurementId: "G-D88ETPQ1KJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { db };
