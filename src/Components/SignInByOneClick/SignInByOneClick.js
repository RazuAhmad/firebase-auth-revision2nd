import React from "react";
import "./SignInByOneClick.css";
import UseFirebase from "../../Firebase/UseFirebase";

const SignInByOneClick = () => {
  const { signInWithGoogle, signedInUser, signInWithGithub } = UseFirebase();
  return (
    <div className="signInContainer">
      <h1>This is a One Click Sign In Component</h1>
      {signedInUser?.email && (
        <div>
          <h2>
            Hey? You are currently signed In as {signedInUser.displayName}
          </h2>
          <h3>Your email address is {signedInUser.email}</h3>
        </div>
      )}
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={signInWithGithub}>Sign In With Github</button>
    </div>
  );
};

export default SignInByOneClick;
