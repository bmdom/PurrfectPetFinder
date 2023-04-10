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
  //const [token, setToken] = useState();
  const { token, setToken } = useToken();

  // if(!token) {
  //   return (
  //     <div>
  //       <Register />
  //       <Login setToken={setToken} />
  //     </div>
  //   );
  // }
  return (
    <div className="App">
        <Routes>
          {/* <Route path="/home" element={<LandingPage />} />  */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/description" element={<Description />} />

        </Routes>
          
      
      </div>
  );
  
}


export default App;
