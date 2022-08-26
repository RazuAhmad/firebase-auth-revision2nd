import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbarContainer">
      <ul className="ulContainer">
        <li>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          <Link to="/oneClickSignIn">OneClickSignIn</Link>
        </li>
        <li>
          <Link to="/emailPassSignIn">EmailPasswordSignIn</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
