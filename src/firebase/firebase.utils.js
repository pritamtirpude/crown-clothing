import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBdXn9XM9k_7EfViqD025biFttGZckKtCU",
  authDomain: "crown-clothing-db-e63bc.firebaseapp.com",
  projectId: "crown-clothing-db-e63bc",
  storageBucket: "crown-clothing-db-e63bc.appspot.com",
  messagingSenderId: "163157554619",
  appId: "1:163157554619:web:86dd805d7613d3687d809e",
  measurementId: "G-BS2JH7LW92",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
