import React, { useState } from "react";
import Logo from "../components/logo";
import "./forgot.css";
import arrow from "../images/arrow.svg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BaseUrl from "../../utils/BaseUrl";

const ForgotApp = () => {
  const Navhandler = useNavigate();
  var [email, setEmail] = useState("");

  function handlemail(e) {
    if (
      /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(e.target.value) ||
      e.target.value === ""
    ) {
      setEmail(e.target.value);
      document.getElementById("logError").style.visibility = "hidden";
      if (e.target.value === "")
        document.getElementById("email").style.borderColor = "black";
      else document.getElementById("email").style.borderColor = "#66DF98";
    } else {
      setEmail("");
      document.getElementById("logError").style.visibility = "visible";
      document.getElementById("email").style.borderColor = "#CF6679";
    }
  }

  function handleapi() {
    if(email)
    {
        BaseUrl.post("api/auth/forget", {
            email: email,
        })
        localStorage.setItem("email",email)
        Navhandler("/forget-otp")
    }
    else
    toast.error("Enter Email");
  }
  return (
    <div>
      <Logo />
      <div id="forgot">
        <div>
          <p id="log_head">Trouble Logging In?</p>
          <p id="otp_msg">
            Enter your email and we'll send you an otp to get back into your
            account.
          </p>
        </div>
        <div>
          <input id="email" placeholder="Enter your email address" onChange={handlemail} />
          <p id="logError" className="error">
            Enter valid Email Address
          </p>
        </div>
        <div id="log_btn" onClick={handleapi}>
          Send OTP
        </div>
        <div id="line"></div>
        <div id="footer_msg">
          Create a new account?{" "}
          <span onClick={() => Navhandler("/signup")}>Sign Up</span>
        </div>
        <div id="back" onClick={() => Navhandler("/login")}>
          <img src={arrow} alt="back" /> Back to log in
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotApp;
