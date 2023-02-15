// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzYg9D6bsqPzNYb_HtleJc1pO2kJcHWvI",
  authDomain: "appreactfinal.firebaseapp.com",
  projectId: "appreactfinal",
  storageBucket: "appreactfinal.appspot.com",
  messagingSenderId: "381124392936",
  appId: "1:381124392936:web:38443b7043d58fcba7165d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);