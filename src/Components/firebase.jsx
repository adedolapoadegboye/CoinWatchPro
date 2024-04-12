import "firebaseui/dist/firebaseui.css";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxTFgbsg46mCZUrSE4FH9AMbrs78Az7NY",
  authDomain: "coinwatch-001.firebaseapp.com",
  projectId: "coinwatch-001",
  storageBucket: "coinwatch-001.appspot.com",
  messagingSenderId: "510733392774",
  appId: "1:510733392774:web:1566071639e59572f9aa07",
  measurementId: "G-N7HJK0H739",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
