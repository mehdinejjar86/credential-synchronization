import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../../firebaseConfig";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
