import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9OCfurSgzY90Kx9ojASU-AmxtTDhNB1Y",
  authDomain: "chickenstation-app.firebaseapp.com",
  databaseURL: "https://chickenstation-app-default-rtdb.firebaseio.com",
  projectId: "chickenstation-app",
  storageBucket: "chickenstation-app.appspot.com",
  messagingSenderId: "303136703584",
  appId: "1:303136703584:web:2fc516c607e76643976f05"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
