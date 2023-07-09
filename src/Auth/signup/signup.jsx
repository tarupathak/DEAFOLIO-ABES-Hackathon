import React, { useState } from "react";
import Logo from "../components/logo";
import illustration from "../images/illustration.svg";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../utils/BaseUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupApp = () => {
  var [email, setEmail] = useState("");
  var [name, setName] = useState("");
  var [password, setPassword] = useState("");
  var [password2, setPassword2] = useState("");

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

  function nameCheck(e) {
    if (/^[a-zA-Z ]*$/.test(e.target.value) || e.target.value == "") {
      setName(e.target.value);
      document.getElementById("nameError").style.visibility = "hidden";
      if (e.target.value === "")
        document.getElementById("name").style.borderColor = "black";
      else document.getElementById("name").style.borderColor = "#66DF98";
    } else {
      setName("");
      document.getElementById("nameError").style.visibility = "visible";
      document.getElementById("name").style.borderColor = "#CF6679";
    }
  }

  function handlepass(e) {
    if (
      /^(?=.*[0-9])(?=.*[!@#$%^_=&*])[a-zA-Z0-9!@#$%_=^&*]{8,100}$/.test(
        e.target.value
      ) ||
      e.target.value === ""
    ) {
      setPassword(e.target.value);
      document.getElementById("passError").style.visibility = "hidden";
      if (e.target.value === "") {
        document.getElementById("password").style.borderColor = "black";
      } else {
        document.getElementById("password").style.borderColor = "#66DF98";
      }
    } else {
      setPassword("");
      document.getElementById("passError").style.visibility = "visible";
      document.getElementById("password").style.borderColor = "#CF6679";
    }
  }

  function handlepass2(e) {
    if (e.target.value == password) {
      setPassword2(e.target.value);
      document.getElementById("passError2").style.visibility = "hidden";
      if (e.target.value === "") {
        document.getElementById("password2").style.borderColor = "black";
      } else {
        document.getElementById("password2").style.borderColor = "#66DF98";
      }
    } else {
      setPassword2("");
      document.getElementById("passError2").style.visibility = "visible";
      document.getElementById("password2").style.borderColor = "#CF6679";
    }
  }

  function handleApi() {
    if (password && password2) {
        localStorage.setItem("email",email)
      BaseUrl.post("api/auth/signup", {
        email: email,
        password: password,
        fullName: name,
      })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("email",email)
            localStorage.setItem("password",password)
            localStorage.setItem("fullName",name)
            Navhandler("/otp");
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } else toast.error("Enter All Details");
  }

  const Navhandler = useNavigate();
  return (
    <div>
      <Logo />
      <img id="illustration" src={illustration} alt="Deaf winning the World" />
      <div id="signup">
        <p id="log_head">Welcome to Deafolio</p>
        <div>
          <input
            id="email"
            placeholder="Enter your email address"
            onChange={handlemail}
          />
          <p id="logError" className="error">
            Enter valid Email Address
          </p>
        </div>
        <div>
          <input
            id="name"
            placeholder="Enter your Full Name"
            onChange={nameCheck}
          />
          <p id="nameError" className="error">
            Enter valid Name
          </p>
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={handlepass}
          />
          <p id="passError" className="error">
            Must be at least 8 characters with 1 special character,
            <br />1 number,1 capital,1 small alphabet.
          </p>
        </div>
        <div>
          <input
            type="password"
            id="password2"
            placeholder="Enter your password"
            onChange={handlepass2}
          />
          <p id="passError2" className="error">
            Passwords must match
          </p>
        </div>
        <div id="log_btn" onClick={handleApi}>Sign Up</div>
        <div id="footer_msg">
          Already have an account?{" "}
          <span onClick={() => Navhandler("/login")}>Log In</span>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignupApp;
