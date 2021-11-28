import React, { useState } from "react";
import AuthInput from "../../components/AuthInput";
import { Link } from "react-router-dom";
import signUp from "./signUp";

export default function SignUp({ pageChanger }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (password !== password2) {
      console.log("passwords don't match!");
      return;
    }
    signUp({ username, email, password });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <AuthInput type="email" setter={setEmail} />
        <AuthInput type="username" setter={setUsername} />
        <AuthInput type="password" setter={setPassword} />
        <AuthInput type="password2" setter={setPassword2} />
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
