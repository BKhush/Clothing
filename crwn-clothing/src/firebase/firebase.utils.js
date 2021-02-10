import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDrAUPYwJIKTNho35EVKr1I1J0JnVFuygM",
  authDomain: "crwn-db-22fc3.firebaseapp.com",
  projectId: "crwn-db-22fc3",
  storageBucket: "crwn-db-22fc3.appspot.com",
  messagingSenderId: "166945560408",
  appId: "1:166945560408:web:246a70e11ea41946b9372d",
  measurementId: "G-69Z5B8M4WS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;