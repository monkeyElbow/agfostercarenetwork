import React, { useEffect, useState, useContext } from "react";
import { auth } from "./firebase";
// import firestore from "./firestore"

const AuthContext = React.createContext();
// const db = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [ loading, setLoading ] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)



        // effort to create user collection at same time of create user
        // ref: https://stackoverflow.com/questions/50086515/firebase-document-for-each-user

        // https://cloud.google.com/firestore/docs/manage-data/add-data
        
        //  https://www.youtube.com/watch?v=Z87OZtIYC_0 5:10

//    function createUserDB(state) {
// const currentUser = firebase.auth().currentUser;
// const uid = currentUser.uid;
// const userData = {lastLoginTime: new Date()}; // change to form data
// return firebase.firestore().doc(`/users/${uid}`).set(userData)
//    };   

   

// add collection effort 1. change bio to city state etc

        // .then(cred => {
        //     return db.collection('users').doc(cred.user.uid).set({
        //         bio: signupForm["signup-bio"].value
        //     })
        // })
        // .then(() => {
        // })

    }

    function signin(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signout() {
      return auth.signOut()
    }
    
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function udpateEmail(email) {
       return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
    })
    return unsubscribe
    }, [])

const value = {
    currentUser,
    signup,
    signin,
    signout,
    resetPassword,
    udpateEmail,
    updatePassword
}

    return(
        <AuthContext.Provider value={value}>
                {!loading && children}
                </AuthContext.Provider>
    )
}

