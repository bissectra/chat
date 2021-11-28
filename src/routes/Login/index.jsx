import React, { useState } from "react";
import AuthInput from "../../components/AuthInput";
import { Link, Navigate } from "react-router-dom";
import login from "./login";

export default function Login({ isLogged, setToken, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    login({ email, password, setToken, setUser });
  };

  if (isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <div className="Card">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <AuthInput type="email" setter={setEmail} />
        <AuthInput type="password" setter={setPassword} />
        <input type="submit" value="Login" />
      </form>
      <span>
        Don't have an account?&nbsp;
        <Link to="/signup">Click here</Link>
        &nbsp;to Sign Up!
      </span>
    </div>
  );
}
