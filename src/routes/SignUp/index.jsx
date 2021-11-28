import React, { useState } from "react";
import AuthInput from "../../components/AuthInput";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import signUp from "./signUp";
import ErrorMessage from "../../components/ErrorMessage";

export default function SignUp({ isLogged }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [done, setDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (isLogged) return <Navigate to="/" />;
  if (done) return <Navigate to="/login" />;

  const submitHandler = (event) => {
    event.preventDefault();
    if (password !== password2) {
      setErrorMessage("passwords don't match!");
      return;
    }
    setErrorMessage("");
    signUp({ username, email, password }, () => {
      setDone(true);
    });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <AuthInput type="email" setter={setEmail} />
        <AuthInput type="username" setter={setUsername} />
        <AuthInput type="password" setter={setPassword} />
        <AuthInput
          type="password2"
          setter={setPassword2}
          placeholder="repeat password"
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <div id="login-button">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
      <span>
        Already have an account?&nbsp;
        <Link to="/login">Click here</Link>
        &nbsp;to Login!
      </span>
    </div>
  );
}
