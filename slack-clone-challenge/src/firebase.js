import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAiaanaydiNUi4Oa8eiwaoLvjTG-N2nvbM",
    authDomain: "slack-clone-challenge-49508.firebaseapp.com",
    projectId: "slack-clone-challenge-49508",
    storageBucket: "slack-clone-challenge-49508.appspot.com",
    messagingSenderId: "443511327329",
    appId: "1:443511327329:web:e35ebd5e299483a790f820"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;