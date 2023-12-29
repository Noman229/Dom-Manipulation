// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUlP8sGBWN2oHnopoEhBlZQaN3JvfmU_c",
  authDomain: "myapp-ced3d.firebaseapp.com",
  projectId: "myapp-ced3d",
  storageBucket: "myapp-ced3d.appspot.com",
  messagingSenderId: "159908318451",
  appId: "1:159908318451:web:5110553ade7ad8d5aefb86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged }