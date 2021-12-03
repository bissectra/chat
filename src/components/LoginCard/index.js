import "./styles.css";
import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../../constants";
import AuthInput from "../AuthInput";

export default function LoginCard({ pageChanger }) {
  const [usernameOrEmail, set_usernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirectToChat = ({ token, user }) => {
    pageChanger("chat", token, user);
  };

  function login() {
    axios
      .post(`${baseURL}/user/login`, {
        email: usernameOrEmail,
        password: password,
      })
      .then((response) => {
        redirectToChat(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const redirectToSignUp = () => {
    pageChanger("signUp");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login();
  };

  return (
    <div className="Card">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <AuthInput type="username" setter={set_usernameOrEmail} />
        <AuthInput type="password" setter={setPassword} />
        <input type="submit" value="Login" />
      </form>
      <span id="unregistered-user-text">
        Don't have an account?&nbsp;
        <button className="linkButton" onClick={redirectToSignUp}>
          Click here
        </button>
        &nbsp;to Sign Up!
      </span>
    </div>
  );
}
