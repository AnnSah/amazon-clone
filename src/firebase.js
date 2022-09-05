import firebase from "firebase/compat/app";
import "firebase/compat/auth";



const firebaseConfig = {
    apiKey: "AIzaSyB9h9b7C6fFwCxlbVUCsFvIks6I-qxKv9I",
    authDomain: "clone-f7ba8.firebaseapp.com",
    projectId: "clone-f7ba8",
    storageBucket: "clone-f7ba8.appspot.com",
    messagingSenderId: "921329824239",
    appId: "1:921329824239:web:bbc248eb836d876ad9461a"
};



firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
// const db = firebase.firestore();

export { auth };
