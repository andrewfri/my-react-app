// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg1fUh6CUrAAGda1M9EVTte7Vf4uAn440",
  authDomain: "my-react-app-c6c34.firebaseapp.com",
  projectId: "my-react-app-c6c34",
  storageBucket: "my-react-app-c6c34.firebasestorage.app",
  messagingSenderId: "475175292811",
  appId: "1:475175292811:web:31b6f34c7b8f06be67298e",
  measurementId: "G-0PL3W3GM36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);