import React from "react";
import Navbar from "../Components/Nav";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
  const Navhandler = useNavigate();

  return (
    <div style={{"display":"flex","flexDirection":"column"}}>
      <Navbar />
      <div id="profileBox">
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
