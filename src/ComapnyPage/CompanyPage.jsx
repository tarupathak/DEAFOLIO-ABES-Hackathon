import React from "react";
import Navbar from "../Components/Nav";
import "./CompanyPage.css";
import CompanyImage from "../Images/company.svg";
import location from "../Images/location.svg";
import pay from "../Images/pay.svg";
import start from "../Images/start.svg";
import time from "../Images/time.svg";

const CompanyPage = () => {
  return (
    <div>
      <Navbar />
      <div id="company-page">
        <p className="companyPara">
          <b>
            Deafolio helps you with interpreter while interview ,personal
            assistance and privileged opportunities if your resume is
            shortlisted by the company
          </b>
        </p>
        <img id="companyImg" src={CompanyImage} alt="get hired" />
        <p className="companyPara2">
          Search for your desired jobs in your dream companies listed below.
        </p>
        <div className="company-box">
          <div className="left-text">
            <div>
              <p className="job-role">Frontend Developer</p>
              <p className="comp-name">Google</p>
            </div>
            <div>
              <p className="skills">Skills Required :</p>
              <ul className="list">
                <li>react</li>
              </ul>
            </div>
            <div>
              <span className="skills ">Apply By : </span>
              <span className="list">date</span>
            </div>
          </div>
          <div className="right-text">
            <div className="text-item"> 
              <img src={location} alt="location" />
              <span className="space"></span>
              <span className="list">Gurgaon</span>
            </div>
            <div className="text-item">
              <img src={start} alt="start" />
              <span className="space"></span>
              <span className="list">Gurgaon</span>
            </div>
            <div className="text-item">
              <img src={pay} alt="pay" />
              <span className="space"></span>
              <span className="list">50,000/-</span>
            </div>
            <div className="text-item">
              <img src={time} alt="time" />
              <span className="space"></span>
              <span className="list">Full time</span>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
