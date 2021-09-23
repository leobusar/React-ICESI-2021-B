// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ7IDOP0Uwz0oYg3PrLIJQgqb_FC6gBJA",
  authDomain: "todo-e1b77.firebaseapp.com",
  databaseURL: "https://todo-e1b77.firebaseio.com",
  projectId: "todo-e1b77",
  storageBucket: "todo-e1b77.appspot.com",
  messagingSenderId: "695021225062",
  appId: "1:695021225062:web:c70b7d9103e8b1523b19a7"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;