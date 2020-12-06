import React, { useEffect, useState } from "react";
import app from "./index.js";
import firebase from "./index.js";
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified, isLogIn;

class Auth extends Componenet {
    render() {
        if (user) {
            // User is signed in.
            isLogIn=true;
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified= user.emailVerified;
            uid = user.uid;
          } else {
            isLogIn=false;// No user is signed in.
          }
        
        return (
            <div className="Auth">
                <AdminNavbar/>
            </div>
        );
    }
}

export default Auth;
