import './LoginCard.css'
import React from 'react';


class LoginCard extends React.Component {
    login(e) {
        e.preventDefault();
        console.log("logged in")
    }

    redirectToSignUp() {
        console.log("redirected to sign up")
    }

    render() {
        return (
            <div className="Card">
                <h1>Chat App</h1>
                <form onSubmit={this.login}>
                    <input type="text" id="usernameOrEmail" name="usernameOrEmail" placeholder="Username or Email"></input><br />
                    <input type="password" id="password" name="password" placeholder="Password"></input><br />
                    <div id="login-button"><input type="submit" value="Login" /></div>
                </form>
                <span id="unregistered-user-text">
                    Don't have an account?&nbsp;
                    <button className="linkButton" onClick={this.redirectToSignUp}>Click here</button>
                    &nbsp;to Sign Up!
                </span>
            </div>
        )
    }
}

export default LoginCard

