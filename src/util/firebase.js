import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({

    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID

    apiKey: "AIzaSyDGc5UZPdfQ-N4y0_OGdlo5bBltDHNBkLM",
    authDomain: "agfcn-316821.firebaseapp.com",
    projectId: "agfcn-316821",
    storageBucket: "agfcn-316821.appspot.com",
    messagingSenderId: "1014596989516",
    appId: "1:1014596989516:web:8542c143da6c5d78b9fae9",
    measurementId: "G-KD6XG13Q48"


})

export const auth = app.auth()
export default app;
