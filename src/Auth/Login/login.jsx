import React, { useState } from "react";
import Logo from "../components/logo";
import illustration from "../images/illustration.svg";
import "./login.css";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../utils/BaseUrl";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginApp = () => {
  const Navhandler = useNavigate();

  var [email, setemail] = useState("");
  var [password, setpassword] = useState("");
  function handlemail(e) {
    if (
      /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(e.target.value) ||
      e.target.value === ""
    ) {
      setemail(e.target.value);
      document.getElementById("logError").style.visibility = "hidden";
      if (e.target.value === "")
        document.getElementById("email").style.borderColor = "black";
      else document.getElementById("email").style.borderColor = "#66DF98";
    } else {
      setemail("");
      document.getElementById("logError").style.visibility = "visible";
      document.getElementById("email").style.borderColor = "#CF6679";
    }
  }

  function handlepass(e) {
    if((/^(?=.*[0-9])(?=.*[!@#$%^_=&*])[a-zA-Z0-9!@#$%_=^&*]{8,100}$/).test(e.target.value) || e.target.value==="")
    {
      setpassword(e.target.value);
      document.getElementById("passError").style.visibility = "hidden";
      if(e.target.value==="")
      {document.getElementById("password").style.borderColor = "white";}
      else
      {document.getElementById("password").style.borderColor = "#66DF98";}
    }
    else{
        setpassword("")
      document.getElementById("passError").style.visibility = "visible";
      document.getElementById("password").style.borderColor = "#CF6679";
    }
  }

  function handleLogin() {
    if(email && password)
    {
      BaseUrl.post("api/auth/login", {
        email: email,
        password: password,
      })
        .then((res) => {
          if(res.status===200)
          Navhandler("/")
        })
        .catch((err) => {
          toast.error(err.response.data.message)
        });
    }
    else
    toast.error("Enter All Details")
  }

  return (
    <div>
      <Logo />
      <img id="illustration" src={illustration} alt="Deaf winning the World" />
      <div id="login">
        <p id="log_head">Welcome to Deafolio</p>
        <div>
          <input id="email" placeholder="Enter your email address" onChange={handlemail}/>
          <p id="logError" className="error">
            Enter valid Email Address
          </p>
        </div>
        <div>
          <input type="password" id="password" placeholder="Enter your password" onChange={handlepass}/>
          <p id="passError" className="error">
            Must be at least 8 characters with 1 special character,<br/>1 number,1 capital,1 small alphabet.
          </p>
          <pre onClick={() => Navhandler("/forgot_password")}>
            Forgot password?
          </pre>
        </div>
        <div id="log_btn" onClick={handleLogin}>
          Log In{" "}
        </div>
        <div id="footer_msg">
          Don't have an account?{" "}
          <span onClick={() => Navhandler("/signup")}>Sign Up</span>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginApp;
