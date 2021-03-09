import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDiewGy8joDCNMSwY9NZti0zsPqcjb6gsc",
    authDomain: "arokyaillam-slack.firebaseapp.com",
    projectId: "arokyaillam-slack",
    storageBucket: "arokyaillam-slack.appspot.com",
    messagingSenderId: "903738759222",
    appId: "1:903738759222:web:56239e13fdf0c8e1962097"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();


  export default db;