// Import FirebaseAuth and firebase.
import {React, useEffect} from 'react';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'

import 'firebaseui/dist/firebaseui.css'
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAqzPycylNq3jwBFJC6oFch0hACJhhxuyM",
    authDomain: "time-cache.firebaseapp.com",
    projectId: "time-cache",
    storageBucket: "time-cache.appspot.com",
    messagingSenderId: "1025042054319",
    appId: "1:1025042054319:web:3f07aecc9a4c179216a85a",
    measurementId: "G-G64487P1Z6"
  };

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

var ui = new firebaseui.auth.AuthUI(app.auth());

function Login() {

  useEffect(() => {
    ui.start('#auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInFlow: 'popup',
      signInSuccessUrl: '/',
    });
  }), [ui]

  return (
    <div>
      <div id="auth-container"></div>
    </div>
  );
}

export default Login