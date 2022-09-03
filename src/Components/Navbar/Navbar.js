import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import UseFirebase from "../../Firebase/UseFirebase";
// import AppContext from "../Context/AppContext";

// import { AppContext } from "../Context/AppContext";
// import UseFirebase from "../../Firebase/UseFirebase";
// import UseFirebase from "../../Firebase/UseFirebase";
const Navbar = () => {
  // const { signedInUser } = useContext(AppContext);
  // console.log(signedInUser);
  const { signedInUser, signOutNow, signInWithGoogle } = UseFirebase();
  console.log(signedInUser);
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
        {signedInUser?.uid && (
          <li>
            <Link to="/">Signed in as {signedInUser?.displayName}</Link>
          </li>
        )}

        {signedInUser?.uid ? (
          <li>
            <button onClick={signOutNow}>Sign Out</button>
          </li>
        ) : (
          <li>
            <button onClick={signInWithGoogle}>Sign In</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
