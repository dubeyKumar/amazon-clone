import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClyFZKqp3WQES3h9IEqBz0zGhBd-xCnX0",
  authDomain: "challenge-acf14.firebaseapp.com",
  projectId: "challenge-acf14",
  storageBucket: "challenge-acf14.appspot.com",
  messagingSenderId: "1096973805882",
  appId: "1:1096973805882:web:79ea952be3004bbef1c803",
  measurementId: "G-390F7QLH2B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
