import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import app from "./firebase.init";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);
const UseFirebase = () => {
  const [signedInUser, setSignedInUser] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setSignedInUser(user);
        setErrorMsg("");
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
        console.log(errorMessage);
      });
  };

  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return {
    signInWithGoogle,
    signedInUser,
    errorMsg,
    signInWithGithub,
  };
};

export default UseFirebase;
