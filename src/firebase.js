import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBnFBvjGdYPikrU4wC3ZrfiIbdbEnIOL5o",
    authDomain: "portfolio-900d3.firebaseapp.com",
    projectId: "portfolio-900d3",
    storageBucket: "portfolio-900d3.appspot.com",
    messagingSenderId: "174540997603",
    appId: "1:174540997603:web:0f89116385d1ef95c396d6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
export default db;