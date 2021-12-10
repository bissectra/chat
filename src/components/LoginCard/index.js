import "./styles.css";
import React, { useState } from "react";
import AuthInput from "../AuthInput";
import login from "./login";
import { Link } from 'react-router-dom';
import handleGoogleLogin from "./handleGoogleLogin";
import { GoogleLogin } from "react-google-login";

export default function LoginCard() {
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
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleGoogleLogin}
        onFailure={handleGoogleLogin}
        cookiePolicy={'single_host_origin'}
      />
      <span id="unregistered-user-text">
        Don't have an account?&nbsp;
        <Link to="/signup">
          <button className="linkButton">
            Click here
          </button>
        </Link>
        &nbsp;to Sign Up!
      </span>
    </div>
  );
}
