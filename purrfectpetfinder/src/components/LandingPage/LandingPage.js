import React from "react";
import { connect } from "react-redux";
import { redirect } from "react-router-dom";
// import LandingPageHero from "./landing-page-hero";
// import LandingPageAbout from "./landing-page-about";
//import LandingPageRegister from "./landing-page-register";
import Login from "../Login/Login";
import useToken from '../App/useToken';
//import Footer from "./footer";

export function LandingPage() {
    const { token, setToken } = useToken();

    if(!token) {
      return <Login setToken={setToken} />
    }
  return (
    <div className="home">
        <p>Landing page</p>
        
        <p>Register Today</p>
      {/* <LandingPageHero />
      <div className="lp-main">
        <LandingPageAbout />
        <LoginForm />
        <svg
          className="lp-main__wave"
          viewBox="0 0 7740 536"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="lp-main__wave--path"
            d="M1934.5 134H0C291 33.5 713 23.5 962 66.5C1152.14 99.3359 1442.5 155 1934.5 0V134Z"
            transform="translate(7738) scale(-4 4)"
          />
        </svg>
      </div>
      <LandingPageRegister />
      <Footer /> */}
    </div>
  );
}

export default LandingPage;