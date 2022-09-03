import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
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

  const signOutNow = () => {
    signOut(auth)
      .then(() => {
        setSignedInUser({});
        setErrorMsg("");
      })
      .catch((error) => {
        setErrorMsg(error);
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

  const signUpWithEmailPass = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSignedInUser(user);
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

  useEffect(() => {
    onAuthStateChanged(auth, (signedInUser) => {
      setSignedInUser(signedInUser);
    });
  }, []);

  return {
    signInWithGoogle,
    signOutNow,
    signedInUser,
    errorMsg,
    signInWithGithub,
    signUpWithEmailPass,
    SignInWithEmailPass,
    updateUserProfile,
  };
};

export default UseFirebase;
