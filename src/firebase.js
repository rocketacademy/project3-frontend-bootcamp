// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-X6EMOTuJGzHRorHUzAizjqjPBfFLhuE",
  authDomain: "stayhere-a8896.firebaseapp.com",
  databaseURL:
    "https://stayhere-a8896-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "stayhere-a8896",
  storageBucket: "stayhere-a8896.appspot.com",
  messagingSenderId: "130124377189",
  appId: "1:130124377189:web:095fe9d945c4c2341caa8c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the database service and export the reference for other modules
export const database = getDatabase(firebaseApp);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);
