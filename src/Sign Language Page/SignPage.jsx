import React from "react";
import signImg1 from "../Images/signImg1.svg";
import "./sign.css";
import signs from '../Images/signs.svg'
import Navbar from "../Components/Nav";

const SignPage = () => {
  return (
    <>
    <Navbar />
      <div className="homePage">
        <div className="topText">
          Welcome to Deafolio, an online platform where you can learn and get
          hired.
        </div>
        <div className="home-img">
          <img src={signImg1} alt="signpage-image" />
        </div>
        <div id="sign-box">
          <div className="Text">
            Welcome to Deafolio, an online platform where you can learn and get
            hired.
          </div>
          <div id="signs"><img src={signs} alt="signs"/></div>
        </div>
      </div>
    </>
  );
};

export default SignPage;
