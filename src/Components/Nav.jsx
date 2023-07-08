import React from "react";
import "./comp.css";
import Logo from "../Auth/components/logo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navhandler = useNavigate();
  const userToken = localStorage.getItem("accessToken");
  console.log(userToken);
  return (
    <div>
    {/* <Logo /> */}
      <ul id="nav">
        <li onClick={() => Navhandler("/home")}>Home</li>
        <li onClick={() => Navhandler("/sign-language")}>Sign Languages</li>
        <li onClick={() => Navhandler("/companies")}>Companies</li>
        {userToken ? (
          <li onClick={() => Navhandler("/profile")}>Profile</li>
        ) : (
          <li onClick={() => Navhandler("/login")}>Log In/Sign Up </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
