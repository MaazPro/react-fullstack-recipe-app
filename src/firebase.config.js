// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4NPJVCCgY4TfLmp4jhFTDuw0H6N1xHPQ",
  authDomain: "react-recipe-5777d.firebaseapp.com",
  projectId: "react-recipe-5777d",
  storageBucket: "react-recipe-5777d.appspot.com",
  messagingSenderId: "540463412018",
  appId: "1:540463412018:web:9270ab18aeccbf62815d2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }