import React from "react";
import axios from "axios";

export default axios.create({
    baseURL:"http://3.111.192.28:8080/"
})