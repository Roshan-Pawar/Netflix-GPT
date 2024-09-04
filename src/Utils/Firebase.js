// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_CONFIG,
  authDomain: "netflixgpt-2003.firebaseapp.com",
  projectId: "netflixgpt-2003",
  storageBucket: "netflixgpt-2003.appspot.com",
  messagingSenderId: "707681147677",
  appId: "1:707681147677:web:4f2817acc04b7f8dbfdff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
