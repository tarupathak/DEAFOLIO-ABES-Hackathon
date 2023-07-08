import React from "react";
import Navbar from "../Components/Nav";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";
import edit from "../Images/edit.svg";

const ProfilePage = () => {
  const Navhandler = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div id="profile">
        <div id="profileBox">
          <div id="back-photo"></div>
          <div className="edit1">
            <img src={edit} alt="edit" />
          </div>
          <div id="profile-photo">
            <img src={""} alt="profile-img" />
          </div>
          <div id="about">
            <div id="name">Taru Pathak</div>
            <div id="about-me">
              UI/UX Designer || Front End Web Developer || Student at AJAY KUMAR
              GARG ENGINEERING COLLEGE, GHAZIABAD
            </div>
            <div id="loc">Ghaziabad, Uttar Pradesh, India.</div>
          </div>
        </div>
        <div className="aboutMebox">
          <div className="aboutHead">About Me</div>
          <div className="edit">
            <img src={edit} alt="edit" />
          </div>
          <div>
            <div className="space2">
              <span className="col">Phone Number : </span>
              <span>638273928349</span>
            </div>
            <div className="space2">
              <span className="col">Age : </span>
              <span>20</span>
            </div>
            <div className="space2">
              <span className="col">DOB : </span>
              <span>638273928349</span>
            </div>
            <div className="space2">
              <span className="col">Gender : </span>
              <span>Female</span>
            </div>
          </div>
        </div>
        <div className="aboutMebox">
          <div className="aboutHead">My Skills</div>
          <div className="edit">
            <img src={edit} alt="edit" />
          </div>
          <div>
            <ul id="tech-list">
              <li>Figma</li>
              <li>React</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
        <div className="aboutMebox">
          <div className="aboutHead">My Qualifications</div>
          <div>
            <ul id="tech-list">
              <li>Figma</li>
              <li>React</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
        <div className="aboutMebox">
          <div className="aboutHead">My Work</div>
          <div className="edit">
            <img src={edit} alt="edit" />
          </div>
          <div>
            <div className="space2">
              <span className="col">Phone Number : </span>
              <span>638273928349</span>
            </div>
            <div className="space2">
              <span className="col">Age : </span>
              <span>20</span>
            </div>
            <div className="space2">
              <span className="col">DOB : </span>
              <span>638273928349</span>
            </div>
            <div className="space2">
              <span className="col">Gender : </span>
              <span>Female</span>
            </div>
          </div>
        </div>
        <div className="aboutMebox">
          <div className="aboutHead">My Experience</div>
          <div className="edit">
            <img src={edit} alt="edit" />
          </div>
          <div>
            <div className="space2">
              <span className="col">Phone Number : </span>
              <span>638273928349</span>
            </div>
            <div className="space2">
              <span className="col">Age : </span>
              <span>20</span>
            </div>
            <div className="space2">
              <span className="col">DOB : </span>
              <span>638273928349</span>
            </div>
            <div className="space2">
              <span className="col">Gender : </span>
              <span>Female</span>
            </div>
          </div>
        </div>
        <div className="aboutMebox">
          <div className="aboutHead">My Resume</div>
          <div className="edit">
            <img src={edit} alt="edit" />
          </div>
          <img src={""} alt="resume" className="resum-img" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
