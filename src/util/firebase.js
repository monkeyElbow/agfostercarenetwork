import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({


    apiKey: "AIzaSyDGc5UZPdfQ-N4y0_OGdlo5bBltDHNBkLM",
    authDomain: "agfcn-316821.firebaseapp.com",
    projectId: "agfcn-316821",
    storageBucket: "agfcn-316821.appspot.com",
    messagingSenderId: "1014596989516",
    appId: "1:1014596989516:web:8542c143da6c5d78b9fae9",
    measurementId: "G-KD6XG13Q48"
})

export const db = firebase.firestore();

export const auth = app.auth()
export default db;
