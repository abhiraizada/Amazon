import firebase from "firebase";

const firbaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMczTMcQOdcFhZMSenvYIHTgO0DOXwwYc",
  authDomain: "clone-c833d.firebaseapp.com",
  projectId: "clone-c833d",
  storageBucket: "clone-c833d.appspot.com",
  messagingSenderId: "799875564954",
  appId: "1:799875564954:web:2307072d0d1ca1d434e623",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
