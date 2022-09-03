import React from "react";
import { Route, Routes } from "react-router-dom";
import SignInByOneClick from "./Components/SignInByOneClick/SignInByOneClick";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import SignInWithEmailPass from "./Components/SignInWithEmailPass/SignInWithEmailPass";
import { UserProvider } from "./Components/Context/AppContext";
// import UseFirebase from "./Firebase/UseFirebase";
const App = () => {
  return (
    <div>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oneClickSignIn" element={<SignInByOneClick />} />
          <Route path="/emailPassSignIn" element={<SignInWithEmailPass />} />
        </Routes>
      </UserProvider>
    </div>
  );
};

export default App;
