import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBwjqvrgeb2_fBNpDV_ThViXyi2lVLxkew",
  authDomain: "twitter-clone-4393f.firebaseapp.com",
  databaseURL: "https://twitter-clone-4393f-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-4393f",
  storageBucket: "twitter-clone-4393f.appspot.com",
  messagingSenderId: "329890721366",
  appId: "1:329890721366:web:42c4d6885c5f4fa68a95f7",
  measurementId: "G-ESJZB7T8PJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
