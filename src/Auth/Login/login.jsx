import React from "react";
import Logo from "../components/logo";
import illustration from "../images/illustration.svg";
import "./login.css"
import {useNavigate} from "react-router-dom";

const LoginApp = () => {
    const Navhandler = useNavigate()

    return<div>
        <Logo />
        <img id="illustration" src={illustration} alt="Deaf winning the World" />
        <div id="login">
            <p id="log_head">Welcome to Deafolio</p>
            <div>
            <input placeholder="Enter your email address"/>
            <p className="error" >Enter valid Email Address</p>
            </div>
            <div>
            <input placeholder="Enter your password"/>
            <p className="error" >Enter valid Password</p>
            <pre onClick={() => Navhandler('/forgot_password')}>Forgot password?</pre>
            </div>
            <div id="log_btn">Log In </div>
            <div id="footer_msg">Don't have an account? <span onClick={() => Navhandler('/signup')}>Sign Up</span></div>
        </div>
    </div>
}

export default LoginApp;