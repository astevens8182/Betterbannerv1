import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  /* content from your Firebase Dashboard */
  apiKey: "AIzaSyAjTJun732nLtAoGKcvTqjGXEzu6OysiDw",
    authDomain: "betterbanner-f49d2.firebaseapp.com",
    databaseURL: "https://betterbanner-f49d2.firebaseio.com",
    projectId: "betterbanner-f49d2",
    storageBucket: "betterbanner-f49d2.appspot.com",
    messagingSenderId: "486277424142",
    appId: "1:486277424142:web:3d2b00ae3b23dee34dc85f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppDB = firebase.database();
const AppAUTH = firebase.auth(); // add this line
export { AppDB, AppAUTH };

