import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsJ2AGsB-hwF8mXRV_B60e-QBJ2uIuPgs",
  authDomain: "everstyle-c1a33.firebaseapp.com",
  projectId: "everstyle-c1a33",
  storageBucket: "everstyle-c1a33.appspot.com",
  messagingSenderId: "493039737417",
  appId: "1:493039737417:web:246a120a3ffe3595257d98",
  measurementId: "G-3ZQ7RZD338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase app, auth, and Firestore
export { app, auth, db, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword };
