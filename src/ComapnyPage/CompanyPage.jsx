import React from "react";
import Navbar from "../Components/Nav";
import './CompanyPage.css'
import CompanyImage from "../Images/company.svg"

const CompanyPage = () => {
    return<div>
    <Navbar />
    <p className="companyPara"><b>
    Deafolio helps you with interpreter while interview ,personal assistance and privileged opportunities if your resume is shortlisted by the company
    </b></p>
    <img id="companyImg" src={CompanyImage} alt = "get hired" />
    <p className="companyPara">
    Search for your desired jobs in your dream companies listed below.
    </p>
    </div>
}

export default CompanyPage