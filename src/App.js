import React from "react";
import { Route, Routes } from "react-router-dom";
import SignInByOneClick from "./Components/SignInByOneClick/SignInByOneClick";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import SignInWithEmailPass from "./Components/SignInWithEmailPass/SignInWithEmailPass";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oneClickSignIn" element={<SignInByOneClick />} />
        <Route path="/emailPassSignIn" element={<SignInWithEmailPass />} />
      </Routes>
    </div>
  );
};

export default App;
