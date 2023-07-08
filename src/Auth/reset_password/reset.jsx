import React, { useState } from "react";
import Logo from "../components/logo";
import "./reset.css";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../utils/BaseUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetApp = () => {
    const Navhandler = useNavigate();
  var [password, setPassword] = useState("");
  var [password2, setPassword2] = useState("");

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

  function handleapi() {
    if (password == password2) {
        const email =  localStorage.getItem("email")
        const otp = localStorage.getItem("otp")
        BaseUrl.post("api/auth/resetpass", {
          email: email,
          password: password,
          otp: otp,
        })
        .then((res) => {
            console.log(res)
          if (res.status === 200) {
            Navhandler("/login");
          }
        })
        .catch((err) => {
            console.log(err)
          toast.error(err.response.data.message);
        });
    } else toast.error("Enter All Details");
  }

  return (
    <div>
      <Logo />
      <div id="reset">
        <div>
          <p id="log_head">Reset Password</p>
          <p id="otp_msg">Enter your new password</p>
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
        <div id="log_btn" onClick={handleapi}>
          Save
        </div>
        <div id="cancel" onClick={()=>Navhandler("/login")}>
          Cancel
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetApp;
