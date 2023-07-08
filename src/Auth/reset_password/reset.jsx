import React from "react";
import Logo from "../components/logo";
import "./reset.css"
import {useNavigate} from "react-router-dom";

const ResetApp = () => {
    const Navhandler = useNavigate()
    return<div>
        <Logo />
        <div id="reset">
        <div>
            <p id="log_head">Reset Password</p>
            <p id="otp_msg">Enter your new password</p>
            </div>
            <div>
            <input placeholder="Enter your password"/>
            <p className="error" >Enter valid Password</p>
            </div>
            <div>
            <input placeholder="Enter your Confirmed Password"/>
            <p className="error" >Passwords must match</p>
            </div>
            <div id="log_btn">Save</div>
            <div id="cancel" onClick={() => Navhandler('/login')}>Cancel</div>
        </div>
    </div>
}

export default ResetApp;