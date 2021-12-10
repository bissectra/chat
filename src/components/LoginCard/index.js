import "./styles.css";
import React, { useState } from "react";
import AuthInput from "../AuthInput";
import login from "./login";
import { Link } from "react-router-dom";
import handleGoogleLogin from "./handleGoogleLogin";
import { GoogleLogin } from "react-google-login";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    login({ email, password }).then((success) =>
      setIncorrectCredentials(!success)
    );
  };

  return (
    <div className="Card">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <AuthInput type="email" setter={setEmail} />
        <AuthInput type="password" setter={setPassword} />
        {incorrectCredentials === true ? (
          <p style={{ color: "red", fontSize: 14 }}>
            Your credentials are incorrect.
          </p>
        ) : null}
        <input type="submit" value="Login" />
      </form>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleGoogleLogin}
        onFailure={handleGoogleLogin}
        cookiePolicy={"single_host_origin"}
      />
      <span id="unregistered-user-text">
        Don't have an account?&nbsp;
        <Link to="/signup">
          <button className="linkButton">Click here</button>
        </Link>
        &nbsp;to Sign Up!
      </span>
    </div>
  );
}
