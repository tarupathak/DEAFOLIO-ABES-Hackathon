import React from "react";
import location from "../Images/location.svg"
import pay from "../Images/pay.svg";
import start from "../Images/start.svg";
import time from "../Images/time.svg";

const Job = () =>{
return<div className="company-box">
<div className="left-text">
  <div>
    <div className="job-role">Frontend Developer</div>
    <div className="comp-name">Google</div>
  </div>
  <div>
    <div className="skills">Skills Required :</div>
    <ul className="list">
      <li>react</li>
      <li>css</li>
      <li>html</li>
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
}

export default Job