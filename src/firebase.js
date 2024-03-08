import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import 'firebase/database';
import { getDatabase } from "firebase/database";

// Your AG Printers Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSfcuMdsLvqXwK59pBQN9cb2S4zfMcaC4",
  authDomain: "ag-printers.firebaseapp.com",
  projectId: "ag-printers",
  storageBucket: "ag-printers.appspot.com",
  messagingSenderId: "391163368460",
  appId: "1:391163368460:web:ad2c4be4a4f11027ed0a29",
  measurementId: "G-FJ7KRC133G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const database = getDatabase(app);
export const analytics = getAnalytics(app);
export default database;