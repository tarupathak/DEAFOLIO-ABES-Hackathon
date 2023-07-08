import React from 'react';
import LoginApp from './Auth/Login/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupApp from './Auth/signup/signup';
import ForgotApp from './Auth/forgot_password/forgot';
import ResetApp from './Auth/reset_password/reset';
import OtpApp from './Auth/Otp/otp';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/login" element={<LoginApp />} ></Route>
    <Route path="/signup" element={<SignupApp />}></Route>
    <Route path="/forgot_password" element={<ForgotApp />}></Route>
    <Route path="/reset_password" element={<ResetApp />}></Route>
    <Route path="/otp" element={<OtpApp />}></Route>
    {/* <Route path="/authphone" element={<Phone />}></Route>
    <Route path="/phoneotp" element={<PhoneOTP />}></Route>
    <Route path="/set_password" element={<Setpass />}></Route> */}
  </Routes>
</BrowserRouter>;
}

export default App;
