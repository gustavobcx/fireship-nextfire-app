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

// Firestore exports
export const firestore = firebase.firestore()
export const fromMillis = firebase.firestore.Timestamp.fromMillis;

export const storage = firebase.storage()

/// Helper functions

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
 export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
 export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
