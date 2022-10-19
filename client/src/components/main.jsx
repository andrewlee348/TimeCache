import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './home';
import Login from './login';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/login' element={<Login />}></Route>
    </Routes>
  );
}

export default Main;