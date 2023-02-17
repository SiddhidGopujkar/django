// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUXD1c2cw7os_FoV1BhENsP3J_yu5Bquo",
  authDomain: "ca-fs-react.firebaseapp.com",
  projectId: "ca-fs-react",
  storageBucket: "ca-fs-react.appspot.com",
  messagingSenderId: "226351773582",
  appId: "1:226351773582:web:363902b45db692205216df",
  measurementId: "G-QCP24CS8VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);