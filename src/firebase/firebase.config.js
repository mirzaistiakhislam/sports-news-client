// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMPAXj1K39XtvyhyDDrQ_iCKTetJvmNEM",
    authDomain: "sports-news-a79e0.firebaseapp.com",
    projectId: "sports-news-a79e0",
    storageBucket: "sports-news-a79e0.appspot.com",
    messagingSenderId: "860010442516",
    appId: "1:860010442516:web:6bfca27c36931279f19c01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;