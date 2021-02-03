 // Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
 

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
   apiKey: "AIzaSyCzLYoE_S4SU7wTdtn8ZXNYxn53ub3Sf-k",
    authDomain: "trading-app-8c6e5.firebaseapp.com",
    projectId: "trading-app-8c6e5",
    storageBucket: "trading-app-8c6e5.appspot.com",
    messagingSenderId: "232964288828",
    appId: "1:232964288828:web:015994d1047423b36aee39"
};

// Initialize Firebase
let firebaseApp =firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDB = firebaseApp.database()

export { firebaseAuth, firebaseDB}
