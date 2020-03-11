
import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDiLMSsOivgcC1GlhL4Kmv8tWFb3uG_AoA",
    authDomain: "notes-926a8.firebaseapp.com",
    databaseURL: "https://notes-926a8.firebaseio.com",
    projectId: "notes-926a8",
    storageBucket: "notes-926a8.appspot.com",
    messagingSenderId: "730429942460",
    appId: "1:730429942460:web:fd46500a9cd0c7014b3eb9",
    measurementId: "G-1L4FMENH7R"
  };

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();