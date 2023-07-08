import React from "react";
import "./HomePage.css";
import homeImg from "../Images/homeImg.svg";
import profileCard from "../Images/profileCard.svg";
import signCard from "../Images/signCard.svg";
import getHired from "../Images/getHired.svg";
import homeImg2 from "../Images/homeImg2.svg"


const HomePage = () => {
  return (
    <>
      <div id="homePage">
        <div className="topText">
          Welcome to Deafolio, an online platform where you can learn and get
          hired.
        </div>
        <div id="home-img">
          <img src={homeImg} alt="homepage-image" />
        </div>
        <div id="infoCards">
          <div className="card">
            <p>Learn different sign languages.</p>
            <div>
              <img src={signCard} alt="sign-card" />
            </div>
          </div>
          <div className="card">
            <p>Make your profile here.</p>
            <div>
              <img src={profileCard} alt="profile-card" />
            </div>
          </div>
          <div className="card">
            <p>Get Hired here.</p>
            <div>
              <img src={getHired} alt="getHired-card" />
            </div>
          </div>
        </div>
        <div id="homeImg2"><img src={homeImg2} alt="homeImg2"/></div>
      </div>
    </>
  );
};

export default HomePage;
