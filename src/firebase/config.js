// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1nWiTSRqZF37T1RrqsX_rOKfre8sjpqY",
  authDomain: "afinadostore.firebaseapp.com",
  projectId: "afinadostore",
  storageBucket: "afinadostore.appspot.com",
  messagingSenderId: "209950932206",
  appId: "1:209950932206:web:10b12598a797eabc8947ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )