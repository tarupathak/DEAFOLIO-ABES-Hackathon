import React from "react";
import Logo from "../components/logo";
import illustration from "../images/illustration.svg";
import "./signup.css"
import {useNavigate} from "react-router-dom";

const SignupApp = () => {
    const Navhandler = useNavigate()
    return<div>
        <Logo />
        <img id="illustration" src={illustration} alt="Deaf winning the World" />
        <div id="signup">
            <p id="log_head">Welcome to Deafolio</p>
            <div>
            <input placeholder="Enter your email address"/>
            <p className="error" >Enter valid Email Address</p>
            </div>
            <div>
            <input placeholder="Enter your Full Name"/>
            <p className="error" >Enter valid Name</p>
            </div>
            <div>
            <input placeholder="Enter your password"/>
            <p className="error" >Enter valid Password</p>
            </div>
            <div>
            <input placeholder="Enter your Confirmed Password"/>
            <p className="error" >Passwords must match</p>
            </div>
            <div id="log_btn">Sign Up</div>
            <div id="footer_msg">Already have an account? <span onClick={() => Navhandler('/login')}>Log In</span></div>
        </div>
    </div>
}

export default SignupApp;