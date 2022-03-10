import firebase from "firebase/app";
import 'firebase/auth'; 
import 'firebase/firestore'; 
import 'firebase/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyDSCiJwRqYI7vHdD_cBj0Or-DdzGz7XaoM",
  authDomain: "nextfire-b6956.firebaseapp.com",
  projectId: "nextfire-b6956",
  storageBucket: "nextfire-b6956.appspot.com",
  messagingSenderId: "713680114892",
  appId: "1:713680114892:web:8147cdad197264a24f5e69"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore()
export const storage = firebase.storage()