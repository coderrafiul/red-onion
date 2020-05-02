import React from 'react'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';


firebase.initializeApp(firebaseConfig);

const AuthContext= createContext()

export const AuthContextProvider = (props)=>{
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({ children, ...rest })=> {
    const auth= useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user.isSignedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }


const Auth=()=>{
    const[user, setUser]= useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password: '',
        confirmPass: '',
        error: '',
        isValid: false,
        existingUser: false
    })

    
    const signUp=(email, password, name)=>{
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res=>{
            
            if(user){
              firebase.auth().currentUser.updateProfile({
                displayName: name
              }).then(()=>{
                const createdUser= {...user}
                createdUser.isSignedIn= true;
                createdUser.error= '';
                setUser(createdUser);
                return user;
              })
            }
            
        })
       
        .catch(err=>{
            const createdUser= {...user}
            createdUser.isSignedIn= false;
            createdUser.error= err.message;
            setUser(createdUser);
            
        });
    }

    const signInWithEmailAndPassword=(email, password)=>{
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res =>{
            const createdUser= {...user}
            createdUser.isSignedIn= true;
            createdUser.error= '';
            setUser(createdUser);
            return user;
         
           
        })
        .catch(err =>{
            const createdUser= {...user}
            createdUser.isSignedIn= false;
            createdUser.error= err.message;
            setUser(createdUser);
            
        })
    }

    const signOut=()=>{
        firebase.auth().signOut()
        .then(res=>{
            const signedOutUser={
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                password: '',
                confirmPass: '',
                error: '',
                isValid: false,
                existingUser: false
              }
            setUser(signedOutUser);
            return user;
        })
        .catch(err=>{
            console.log(err)
        })
    }

    
    return {
        user,
        setUser,
        signUp,
        signInWithEmailAndPassword,
        signOut
      
    }
}

export default Auth;
