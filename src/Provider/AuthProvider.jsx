import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider()
    

    const createUser= (email, password)=>{
       return createUserWithEmailAndPassword(auth, email,password);
    }
    
    const logOut = () =>{
        return signOut(auth);
    }

    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const hadleGoogleSignIn=()=>{
        signInWithPopup(auth, provider);
     }
 

    useEffect(()=>{
    const unsubscribe=   onAuthStateChanged(auth,(currentUser)=>{

        setUser(currentUser)
       });
       return()=>{
        unsubscribe();
       }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        updateUser,
        hadleGoogleSignIn
    }
  
    return <AuthContext value={authData}>
        { children }
    </AuthContext>
};

export default AuthProvider;