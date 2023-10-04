// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  // -- production credentials
  apiKey: "AIzaSyDSw7PgI_jJj8HnMM5P_z61MILjUqeTP_U",
  authDomain: "hilmaproject.firebaseapp.com",
  projectId: "hilmaproject",
  storageBucket: "hilmaproject.appspot.com",
  messagingSenderId: "618674422620",
  appId: "1:618674422620:web:85a2f2db39d025af5c3799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();