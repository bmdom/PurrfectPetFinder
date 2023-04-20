import React from "react";
import { connect } from "react-redux";
import { redirect, Link } from "react-router-dom";
// import LandingPageHero from "./landing-page-hero";
// import LandingPageAbout from "./landing-page-about";
//import LandingPageRegister from "./landing-page-register";
import Login from "../Login/Login";
import useToken from '../App/useToken';
//import Footer from "./footer";
import BackgroundImage from '../../assets/main-wave.png'
export function LandingPage() {
  return (
    <header style={ HeaderStyle }>
      <h1 className="main-title text-center">Purrfect Pet Finder</h1>
      <div className="buttons text-center">
          <Link to="/login">
              <button className="primary-button">log in</button>
          </Link>
          <Link to="/register">
              <button className="primary-button" id="reg_btn"><span>register </span></button>
          </Link>
      </div>
    </header>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}

export default LandingPage;