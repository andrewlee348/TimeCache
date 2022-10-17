import './App.css';
import { useEffect } from 'react';
import Home from './components/home';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from "firebase/auth";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./components/login"

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

const auth = getAuth(app);

function App() {
    useEffect(() => {
        if (!auth.currentUser) {
            console.log("Not signed in")
        }
    }), []

    return (
        <BrowserRouter>
        <Routes>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                </Routes>
        </BrowserRouter>
    );
}

export default App;
