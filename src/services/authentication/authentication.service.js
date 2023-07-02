import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCI5c5MlEQJUTKIOq9a84B3DJYJSx_U2ZY",
  authDomain: "cryptodid-75872.firebaseapp.com",
  projectId: "cryptodid-75872",
  storageBucket: "cryptodid-75872.appspot.com",
  messagingSenderId: "532514825273",
  appId: "1:532514825273:web:7c0cf1c5c8514f662419e8",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTRORE_DB = getFirestore(FIREBASE_APP);

const auth = FIREBASE_AUTH;

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
