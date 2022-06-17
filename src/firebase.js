// import * as firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlubkhbC6ZxeOp2Zgk1Q1n2g6VKJbyQzo",
  authDomain: "tik-tok-clone-70ab6.firebaseapp.com",
  projectId: "tik-tok-clone-70ab6",
  storageBucket: "tik-tok-clone-70ab6.appspot.com",
  messagingSenderId: "152234699235",
  appId: "1:152234699235:web:eb0a97291e53ed4435d8d6",
  measurementId: "G-TZLF1B9SX7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";



// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getAnalytics(app);


// ----------------------------------------------



// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAlubkhbC6ZxeOp2Zgk1Q1n2g6VKJbyQzo",
//   authDomain: "tik-tok-clone-70ab6.firebaseapp.com",
//   projectId: "tik-tok-clone-70ab6",
//   storageBucket: "tik-tok-clone-70ab6.appspot.com",
//   messagingSenderId: "152234699235",
//   appId: "1:152234699235:web:eb0a97291e53ed4435d8d6",
//   measurementId: "G-TZLF1B9SX7"
// };

// const app = !firebase.apps.length
//     ? firebase.initializeApp(firebaseConfig)
//     : firebase.app();

// const db = app.firestore();
// const storage = firebase.storage();

// export default db

