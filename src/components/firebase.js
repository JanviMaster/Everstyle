import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo7ucnZlajUSrLZcVzfbaPuYK3aVayjLY",
  authDomain: "everstyle-0512.firebaseapp.com",
  projectId: "everstyle-0512",
  storageBucket: "everstyle-0512.firebasestorage.app",
  messagingSenderId: "582231359027",
  appId: "1:582231359027:web:10de668addb789ec82ed46"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword };
