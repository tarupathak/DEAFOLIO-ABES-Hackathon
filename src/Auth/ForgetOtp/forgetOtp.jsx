import React, { useState } from "react";
import Logo from "../components/logo";
import "./otp.css";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import BaseUrl from "../../utils/BaseUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetOtpApp = () => {
  const Navhandler = useNavigate();
  const [otp, setOtp] = useState("");

  function handleapi() {
    const email = localStorage.getItem("email");
    console.log(email);
    BaseUrl.post("/api/auth/verifyForPassword", {
      email: email,
      otp: otp,
    })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          localStorage.setItem("otp", otp);
          Navhandler("/reset_password");
        }
      })
      .catch((err) => {
        toast.error("wrong otp");
        console.log(err);
      });
  }

  function resendotp() {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const fullName = localStorage.getItem("fullName");
    BaseUrl.post("api/auth/forget", {
      email: email,
    });
  }

  return (
    <div>
      <Logo />
      <div id="otp">
        <div>
          <p id="log_head">Check for OTP</p>
          <p id="otp_msg">Write your one time password here!</p>
        </div>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span> </span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: "4vw",
            height: "4vw",
            margin: "0 2vw",
            fontSize: "2rem",
            borderRadius: "4px",
            border: "1px solid rgba(0,0,0,.3)",
            padding: "0",
          }}
        />
        <div id="otp_ques">
          Didn't get OTP? <span onClick={resendotp}>Resend OTP</span>
        </div>
        <div id="log_btn" onClick={handleapi}>
          Verify
        </div>
        <div id="foot" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgetOtpApp;
