// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4_3soUO5QEwwMw4J84E_x2L2N2J-X-aI",
  authDomain: "quedate-de-una.firebaseapp.com",
  databaseURL: "https://quedate-de-una-default-rtdb.firebaseio.com",
  projectId: "quedate-de-una",
  storageBucket: "quedate-de-una.firebasestorage.app",
  messagingSenderId: "6227045824",
  appId: "1:6227045824:web:67bd8d6dbd5e8838d36c25",
  measurementId: "G-Q6RQMZM2EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);