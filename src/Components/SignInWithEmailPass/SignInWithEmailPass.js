import React, { useState } from "react";
import "./SignInWithEmailPass.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import UseFirebase from "../../Firebase/UseFirebase";

const SignInWithEmailPass = () => {
  const { signUpWithEmailPass, SignInWithEmailPass, updateUserProfile } =
    UseFirebase();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleCheckBox = (event) => {
    setRegistered(!registered);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (registered) {
      SignInWithEmailPass(userEmail, userPassword);
    } else {
      signUpWithEmailPass(userEmail, userPassword, name);
      updateUserProfile(name);
    }

    console.log("Form submitted", userEmail, userPassword);
  };

  return (
    <Form className="formContainer" onSubmit={handleForm}>
      {!registered && (
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            required
            onChange={handleName}
            type="text"
            placeholder="Enter your name"
          />
          <Form.Text className="text-muted">
            We'll never share your name with anyone else.
          </Form.Text>
        </Form.Group>
      )}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          onChange={handleEmail}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          onChange={handlePassword}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onChange={handleCheckBox}
          type="checkbox"
          label="Already have an account?"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default SignInWithEmailPass;
