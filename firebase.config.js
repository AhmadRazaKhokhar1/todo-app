// Import the functions you need from the SDKs you need
import { initializeApp } from "@react-native-firebase/app";
import {getFirestore} from '@react-native-firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKFrJlh9_TR2mXPGwL2dqWdudNd9LiXYs",
  authDomain: "todo-db561.firebaseapp.com",
  projectId: "todo-db561",
  storageBucket: "todo-db561.appspot.com",
  messagingSenderId: "532232905597",
  appId: "1:532232905597:web:c90c25f2bd22868ca62214",
  measurementId: "G-PRBV83SN4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)