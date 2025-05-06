import React, { createContext, useEffect, useRef, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const emailRef=useRef()
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
    const forgetPassword =(email)=>{
       return sendPasswordResetEmail(auth,email)
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
        hadleGoogleSignIn,
        emailRef,
        forgetPassword
    }
  
    return <AuthContext value={authData}>
        { children }
    </AuthContext>
};

export default AuthProvider;