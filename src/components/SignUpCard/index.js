import "./styles.css";
import { useState } from "react";
import AuthInput from "../AuthInput";
import signUp from "./signUp";

export default function SignUpCard({ togglePage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (password !== password2) {
      console.log("passwords don't match");
    }
    signUp({ username, password, togglePage });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <AuthInput type="username" setter={setUsername} />
        <AuthInput type="password" setter={setPassword} />
        <AuthInput type="password2" setter={setPassword2} />
        <div id="login-button">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
      <span id="unregistered-user-text">
        Already have an account?&nbsp;
        <button className="linkButton" onClick={togglePage}>
          Click here
        </button>
        &nbsp;to Login!
      </span>
    </div>
  );
}
