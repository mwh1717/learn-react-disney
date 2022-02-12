import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAuth, signInWithCustomToken } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDifrYi4RM3kSNwsoMgxxtqWToBvPIFQi0",
  authDomain: "todo-app-e3cf0.firebaseapp.com",
  projectId: "todo-app-e3cf0",
  storageBucket: "todo-app-e3cf0.appspot.com",
  messagingSenderId: "940016886081",
  appId: "1:940016886081:web:91686613f16b1b1f8001c0",
  measurementId: "G-JHPC7TP12K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth();


export default {  };