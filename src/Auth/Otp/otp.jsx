import React from "react";
import Logo from "../components/logo";
import "./otp.css"
import {useNavigate} from "react-router-dom";

const OtpApp = () => {
    const Navhandler = useNavigate()
    return<div>
        <Logo />
        <div id="otp">
        <div>
            <p id="log_head">Check for OTP</p>
            <p id="otp_msg">Write your one time password here!</p>
            </div>
            <div id="otpblock">
            <input className="otpbox" /><input className="otpbox" /><input className="otpbox" /><input className="otpbox" />
            </div>
            <div id="otp_ques">Didn't get OTP? <span>Resend OTP</span></div>
            <div id="log_btn">Verify</div>                                   
            <div id="foot" />
        </div>
    </div>
}

export default OtpApp;