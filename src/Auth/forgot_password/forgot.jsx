import React from "react";
import Logo from "../components/logo";
import "./forgot.css"
import arrow from "./arrow.svg"
import {useNavigate} from "react-router-dom";

const ForgotApp = () => {
    const Navhandler = useNavigate()
    return<div>
        <Logo />
        <div id="forgot">
        <div>
            <p id="log_head">Trouble Logging In?</p>
            <p id="otp_msg">Enter your email and we'll send you an otp to get back into your account.</p>
            </div>
            <div>
            <input placeholder="Enter your email address"/>
            <p className="error" >Enter valid Email Address</p>
            </div>
            <div id="log_btn">Send OTP</div>
            <div id="line"></div>
            <div id="footer_msg">Create a new account? <span onClick={() => Navhandler('/signup')}>Sign Up</span></div>
            <div id="back" onClick={() => Navhandler('/login')}><img src={arrow} alt="back" />   Back to log in</div>
        </div>
    </div>
}

export default ForgotApp;