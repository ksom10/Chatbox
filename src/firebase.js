import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBz0AOIMQHzHhuFRwMznjwBlk1_hcO2mSk",
    authDomain: "chatbox-92db1.firebaseapp.com",
    projectId: "chatbox-92db1",
    storageBucket: "chatbox-92db1.appspot.com",
    messagingSenderId: "171503856509",
    appId: "1:171503856509:web:a60c3c542bc47f55717a14"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider }