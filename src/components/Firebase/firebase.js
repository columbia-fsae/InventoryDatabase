
import React from 'react';
import app from 'firebase/app';

const config = {
  apiKey: "AIzaSyBVO9fyMurPYcjq1a1-LaEk-cZ2M8hSwJ4",
  authDomain: "fsae-db.firebaseapp.com",
  databaseURL: "https://fsae-db.firebaseio.com",
  projectId: "fsae-db",
  storageBucket: "fsae-db.appspot.com",
  messagingSenderId: "633322166012",
  appId: "1:633322166012:web:693464354223944ae5e979",
  measurementId: "G-0HTMKY5B4S"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}
export default Firebase;