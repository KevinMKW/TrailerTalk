// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCGvF9vvWUxxZ9f8ret3rtgevTJVzy8QAY",
  authDomain: "trailertalk-6c805.firebaseapp.com",
  projectId: "trailertalk-6c805",
  storageBucket: "trailertalk-6c805.appspot.com",
  messagingSenderId: "438478746386",
  appId: "1:438478746386:web:2f0bc3588482db0fe8f9cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();