import './App.css';
import { useState, useEffect } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Nav_Bar from './components/navbar';
import Main from './components/main';

const firebaseConfig = {
    apiKey: "AIzaSyAqzPycylNq3jwBFJC6oFch0hACJhhxuyM",
    authDomain: "time-cache.firebaseapp.com",
    projectId: "time-cache",
    storageBucket: "time-cache.appspot.com",
    messagingSenderId: "1025042054319",
    appId: "1:1025042054319:web:3f07aecc9a4c179216a85a",
    measurementId: "G-G64487P1Z6"
  };

var app = firebase.initializeApp(firebaseConfig);

function App() {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        app.auth().onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user)
            }
            else {
                console.log("Not signed in")
            }
          })
    }), []

    return (
        <div>
            <Nav_Bar />
            <Main />
        </div>
    );
}

export default App;
