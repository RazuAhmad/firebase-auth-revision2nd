import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
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

  const EmailVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Email Verification sent");
    });
  };

  const updateUserProfile = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const signUpWithEmailPass = (email, password, name, phoneNumber) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        EmailVerification();
        updateUserProfile(name);

        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const SignInWithEmailPass = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setErrorMsg("");
        setSignedInUser(user);

        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
        console.log(errorMessage);
      });
  };

  return {
    signInWithGoogle,
    signedInUser,
    errorMsg,
    signInWithGithub,
    signUpWithEmailPass,
    SignInWithEmailPass,
    updateUserProfile,
  };
};

export default UseFirebase;
