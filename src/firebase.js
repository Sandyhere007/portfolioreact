// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0Kbkm8zCO-_J7LX4XgcMlHVYuS5ZQQ8M",
  authDomain: "portfolio-de8a8.firebaseapp.com",
  projectId: "portfolio-de8a8",
  storageBucket: "portfolio-de8a8.appspot.com",
  messagingSenderId: "681138114403",
  appId: "1:681138114403:web:ec3738523e4ffe20e0cd56",
  measurementId: "G-PKYDXZ8BQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  export const db = getFirestore();