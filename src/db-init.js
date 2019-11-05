import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  /* content from your Firebase Dashboard */
  apiKey: "AIzaSyAUgWuzlfgytNh1NW1VK9BIaUoi87EM924",
    authDomain: "hw4v2-772af.firebaseapp.com",
    databaseURL: "https://hw4v2-772af.firebaseio.com",
    projectId: "hw4v2-772af",
    storageBucket: "hw4v2-772af.appspot.com",
    messagingSenderId: "542452231471",
    appId: "1:542452231471:web:ee793889c80ce9e1a9c5da"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppDB = firebase.database();
const AppAUTH = firebase.auth(); // add this line
export { AppDB, AppAUTH };

