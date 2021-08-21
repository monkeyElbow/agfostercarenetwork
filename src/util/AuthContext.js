import React, { useEffect, useState, useContext } from "react";
import { auth } from "./firebase";
import firebase from "firebase/app";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}


export function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    auth.signInWithPopup(provider)
    // .then(function(result) {
    //     var token = result.credential.accessToken;
    //     var currentUser = result.user
    // })

}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [ loading, setLoading ] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
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

    function updateEmail(email) {
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
    updateEmail,
    updatePassword,
}

    return(
        <AuthContext.Provider value={value}>
                {!loading && children}
                </AuthContext.Provider>
    )
}

