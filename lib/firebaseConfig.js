
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBURwq4jXupqnP_vJWWkwhshx3sW6cBHek",
  authDomain: "chinese-dictionary-6b1db.firebaseapp.com",
  projectId: "chinese-dictionary-6b1db",
  storageBucket: "chinese-dictionary-6b1db.appspot.com",
  messagingSenderId: "137296856085",
  appId: "1:137296856085:web:6b2a8f002ae58486eaba1c",
  measurementId: "G-ZMCVMGSNMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;