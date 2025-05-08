import React, { createContext, useEffect, useRef, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const emailRef=useRef();
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const [loading, setLoading]= useState(true);
    
    // console.log(user, loading)

    const createUser= (email, password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email,password);
    }
    
    const logOut = () =>{
        return signOut(auth);
    }

    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const forgetPassword =(email)=>{
       return sendPasswordResetEmail(auth,email)
    }
    

    const hadleGoogleSignIn=()=>{
        signInWithPopup(auth, provider);
     }

     const updatedProfile =(name,photoURL)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
          
     }
 

    useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
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
        forgetPassword,
        updatedProfile,
        loading,
        setLoading
    }
  
    return <AuthContext value={authData}>
        { children }
    </AuthContext>
};

export default AuthProvider;