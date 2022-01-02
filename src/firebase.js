import firebase from "firebase/compat/app";
import "firebase/compat/auth";


firebase.initializeApp({
  apiKey: "AIzaSyBSOhLzrcSkZeh-uOQ62yHO3Wx6BrvmxYQ",
  authDomain: "unichat-6889c.firebaseapp.com",
  projectId: "unichat-6889c",
  storageBucket: "unichat-6889c.appspot.com",
  messagingSenderId: "610673389931",
  appId: "1:610673389931:web:61de8c83c726e441c81c2e",
});

export const auth = firebase.auth();