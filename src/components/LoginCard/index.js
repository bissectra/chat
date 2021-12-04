import "./styles.css";
import React, { useState } from "react";
import AuthInput from "../AuthInput";
import login from "./login";

export default function LoginCard({ togglePage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    login({ username, password });
  };

  return (
    <div className="Card">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <AuthInput type="username" setter={setUsername} />
        <AuthInput type="password" setter={setPassword} />
        <input type="submit" value="Login" />
      </form>
      <span id="unregistered-user-text">
        Don't have an account?&nbsp;
        <button className="linkButton" onClick={togglePage}>
          Click here
        </button>
        &nbsp;to Sign Up!
      </span>
    </div>
  );
}
