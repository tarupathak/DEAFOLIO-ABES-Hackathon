import React from "react";
import "./HomePage.css";
import homeImg from "../Images/homeImg.svg";
import profileCard from "../Images/profileCard.svg";
import signCard from "../Images/signCard.svg";
import getHired from "../Images/getHired.svg";
import homeImg2 from "../Images/homeImg2.svg";
import resume from "../Images/resume.svg";
import Logo from "../Auth/components/logo";
import '../Components/comp.css'
import Navbar from "../Components/Nav";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const Navhandler = useNavigate();
  const userToken = localStorage.getItem("accessToken");
  return (
    <>
      {/* <div style={{"display":"flex","flexDirection":"column"}}>
        <Logo />
        <ul id="nav">
          <li onClick={() => Navhandler("/home")}>Home</li>
          <li onClick={() => Navhandler("/saign-language")}>Sign Languages</li>
          <li onClick={() => Navhandler("/companies")}>Companies</li>
          {userToken ? (
            <li onClick={() => Navhandler("/profile")}>Profile</li>
          ) : (
            <li onClick={() => Navhandler("/login")}>Log In/Sign Up </li>
          )}
        </ul>
      </div> */}
      <div className="homePage">
        <div className="topText">
          Welcome to Deafolio, an online platform where you can learn and get
          hired.
        </div>
        <div className="home-img">
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
        <div id="homeImg2">
          <img src={homeImg2} alt="homeImg2" />
        </div>
        <div id="resumePart">
          <div id="text">
            <p id="head">Make your resume and show it on your profile.</p>
            <p id="discription">
              Make your portfolio and show it on your profile. Get hired with
              the help of your profile. We will mail you as soon as your
              portfolio gets shortlisted.
            </p>
          </div>
          <div>
            <img src={resume} alt="resume" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
