import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDvdHFDa22KcE7ZhAhMxjoiAb_mpAF4dJY",
  authDomain: "fir-fa5db.firebaseapp.com",
  projectId: "fir-fa5db",
  storageBucket: "fir-fa5db.firebasestorage.app",
  messagingSenderId: "475005334137",
  appId: "1:475005334137:web:f36861ce5e7f81c6b39aa8",
};


const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
