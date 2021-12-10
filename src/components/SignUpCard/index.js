import "./styles.css";
import { useState } from "react";
import AuthInput from "../AuthInput";
import signUp from "./signUp";
import { Link } from 'react-router-dom';

export default function SignUpCard() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [matchPasswords, setMatchPasswords] = useState(true);


  const submitHandler = (event) => {
    event.preventDefault();
    if (password !== password2) {
      setMatchPasswords(false);
      return;
    }
    signUp({ email, username, password });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={submitHandler}>
        <AuthInput type="username" setter={setUsername} />
        <AuthInput type="email" setter={setEmail} />
        <AuthInput type="password" setter={setPassword} />
        <AuthInput type="password2" setter={setPassword2} />
        {matchPasswords === false ?
          <span style={{color: 'red', fontSize: 14}}>Mismatched passwords!</span>
          :
          null
        }
        <div id="login-button">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
      <span id="unregistered-user-text">
        Already have an account?&nbsp;
        <Link to="/login">
          <button className="linkButton">
            Click here
          </button>
        </Link>
        &nbsp;to Login!
      </span>
    </div>
  );
}
