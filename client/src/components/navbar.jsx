import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from 'react';
import Login from "./login";


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth'

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

const auth = firebase.auth();

export default function Nav_Bar() {
    // useEffect(() => {
    //     app.auth().onAuthStateChanged(user => {
    //         if (user) {
    //             setCurrentUser(user)
    //         }
    //         else {
    //             console.log("Not signed in")
    //             return <Login />
    //         }
    //       })
    // }), []

    const [user] = useAuthState(auth);

    return (
        <Navbar bg="light" expand="lg">
            <Container> 
                <Navbar.Brand href="/">TimeCache</Navbar.Brand>
                <NavDropdown title="Account" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/sign_up">Sign-Up</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => auth.signOut()}>Sign-Out</NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    )
};