
import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "Enter Your ID Key",
  authDomain: "Enter Your ID",
  databaseURL: "Enter Your ID",
  projectId: "Enter Your ID",
  storageBucket: "Enter Your ID",
  messagingSenderId: "Enter Your ID",
  appId: "Enter Your ID",
  measurementId: "Enter Your ID"
  };

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();