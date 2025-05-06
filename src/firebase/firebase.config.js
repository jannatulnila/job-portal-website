// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtKfv2yV3mheaFHvk_9crTuA3W0TH7XgY",
  authDomain: "job-track-website-84a6b.firebaseapp.com",
  projectId: "job-track-website-84a6b",
  storageBucket: "job-track-website-84a6b.firebasestorage.app",
  messagingSenderId: "723706765850",
  appId: "1:723706765850:web:1137edb18b8a7db82a27a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;