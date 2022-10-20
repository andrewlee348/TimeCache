import { React, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './home';
import Login from './login';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth'

const auth = firebase.auth();

const Main = () => {
  const [user] = useAuthState(auth);

    if (!user) {
        return <Login />
    }

  return (
    <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
    </Routes>
  );
}

export default Main;