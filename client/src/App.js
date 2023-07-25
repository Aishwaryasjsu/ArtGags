import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/SignUp'
import Login from './components/Login';
import SellerDetails from './components/SellerDetails'
 
const App = () =>{
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="sellerdetails" element={<SellerDetails/>}/>
    </Routes>
  )
}

export default App;