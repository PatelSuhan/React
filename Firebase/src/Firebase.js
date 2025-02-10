import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAti4gvehBxZGZJcYr72LimsKcBvgkbl4E",
  authDomain: "react-c4a6a.firebaseapp.com",
  projectId: "react-c4a6a",
  storageBucket: "react-c4a6a.firebasestorage.app",
  messagingSenderId: "122886856054",
  appId: "1:122886856054:web:17ee0a4603e75bbd33ee57",
  measurementId: "G-FYYB6S873V",
  Database: "https://react-c4a6a-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);