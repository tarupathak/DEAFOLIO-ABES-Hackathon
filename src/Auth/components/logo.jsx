import React from "react";
import "./comp.css"
import logo from "../images/logo.svg"

const Logo = () => {
    return<div id='heading'>
        <img src={logo} alt="logo" />Deafolio
        <p><i>Hearing doesn't make you <br/>
Smart but your Skills do</i></p>
    </div>
}

export default Logo;