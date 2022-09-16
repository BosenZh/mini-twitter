import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEAGT4IXnOwUV_VFTMlCR-bJOnavG8T4U",
  authDomain: "mini-twitter-61926.firebaseapp.com",
  projectId: "mini-twitter-61926",
  storageBucket: "mini-twitter-61926.appspot.com",
  messagingSenderId: "812383746613",
  appId: "1:812383746613:web:ebb255311bc8c522f60f7c",
  measurementId: "G-BG3V131RVF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
