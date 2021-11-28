import "./styles.css";
import React, { useState } from "react";
import axios from "axios";

export default function LoginCard({ pageChanger }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post("http://localhost:3000/user/login", { email, password })
      .then((response) => redirectToChat(response.data))
      .catch((error) => console.log(error));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login();
  };

  const redirectToChat = ({ token, user }) => pageChanger("chat", token, user);
  const redirectToSignUp = () => pageChanger("signUp");

  return (
    <div className="Card">
      <h1>Chat App</h1>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <br />
        <div id="login-button">
          <input type="submit" value="Login" />
        </div>
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
