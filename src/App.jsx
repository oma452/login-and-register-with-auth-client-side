import { useState } from 'react';
import Signup from './Signup';
import Home from './Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />}></Route>
      </Routes>


    </BrowserRouter>
  );
}

export default App;

