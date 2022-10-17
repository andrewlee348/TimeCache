// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from "firebase/auth";

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
firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

function Login() {
  return (
    
    <body>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="./loginPage.css"></link>
      <script src="./loginPage.js" defer></script>

      <div id="welcome_container">
        <h1 class="welcome_message">Please Log-In: </h1>
      </div>

      <div class="center">
        <div id="login_container">
          <form>
            <label for="username"></label>
            <input type="text" id="username" placeholder="Username" name="username" required></input>
            <label for="password"></label>
            <input type="password" id="password" placeholder="Password" name="password" required></input>
            <div id="incorrect_credentials" class="center">
              <b>Your username or password is not correct!</b>
            </div>

            <div class="buttons">
              <button type="button" id="login" onclick="handleLogin()">Log-In</button>
            </div>
          </form>

        </div>
      </div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </body>

  );
}

export default Login