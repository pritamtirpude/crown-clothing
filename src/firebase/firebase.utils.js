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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
