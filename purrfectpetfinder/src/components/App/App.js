import React, { useState }from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import LandingPage from '../LandingPage/LandingPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Cards from '../Cards/Cards';
import Description from '../Cards/Description';
import Register from '../Register/Register';
//import { refreshAuthToken } from '../../actions/auth.js';
import useToken from './useToken';



function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} /> 
          <Route path="/login" element={ <Login/>} />
          <Route path="/register" element={ <Register/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/description" element={<Description />} />

        </Routes>
          
      <Bottom />
      </div>
  );
  
}
const Bottom = () => {
  return (
      <p className="text-center" style={ BottomStyle }>Designed & coded by Bianca Dominguez</p>
  )
}

const BottomStyle = {
  background: "#f5dcbd",
  fontSize: ".8rem",
  color: "#fff",
  position: "absolute",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5"
}

export default App;
