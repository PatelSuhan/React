import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAti4gvehBxZGZJcYr72LimsKcBvgkbl4E",
  authDomain: "react-c4a6a.firebaseapp.com",
  databaseURL: "https://react-c4a6a-default-rtdb.firebaseio.com",
  projectId: "react-c4a6a",
  storageBucket: "react-c4a6a.firebasestorage.app",
  messagingSenderId: "122886856054",
  appId: "1:122886856054:web:17ee0a4603e75bbd33ee57",
  measurementId: "G-FYYB6S873V"
};

export const app = initializeApp(firebaseConfig);