// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCiNCNEdvpOFrAtRBfqDqPIb6QSQ4hbvmM",
  authDomain: "chatapp-38613.firebaseapp.com",
  projectId: "chatapp-38613",
  storageBucket: "chatapp-38613.appspot.com",
  messagingSenderId: "576491067919",
  appId: "1:576491067919:web:5ef33b24d50d2816c0617a",
};

// Initialize Firebase
export const firebaseInitialize = () => {
  const app = initializeApp(firebaseConfig);
};
