// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC62I_gKjZCjHdc0v-22ZwDqn2v2V_5Aw",
  authDomain: "bistor-boss-c4d24.firebaseapp.com",
  projectId: "bistor-boss-c4d24",
  storageBucket: "bistor-boss-c4d24.appspot.com",
  messagingSenderId: "29144834263",
  appId: "1:29144834263:web:8e3880c37b99f77f195092",
  measurementId: "G-F08NJ74RZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app