import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD66I0Lo3sqsCASjwOo9Q6FPXchq7V7zPI",
  authDomain: "robinhood-clone-d2dd5.firebaseapp.com",
  projectId: "robinhood-clone-d2dd5",
  storageBucket: "robinhood-clone-d2dd5.appspot.com",
  messagingSenderId: "982593648461",
  appId: "1:982593648461:web:a0cec71fa59edd5b4f6904",
  measurementId: "G-NKRJHQ6R46"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };