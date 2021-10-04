import './SignUpCard.css'
import React from 'react';


class SignUpCard extends React.Component {
    login(e) {
        e.preventDefault();
        console.log("logged in")
    }

    redirectToLogin() {
        console.log("redirected to login")
    }

    render() {
        return (
            <div className="Card">
                <h1>Sign Up</h1>
                <form onSubmit={this.login}>
                    <input type="text" id="username" name="username" placeholder="Username"></input><br />
                    <input type="email" id="email" name="email" placeholder="Email"></input><br />
                    <input type="password" id="password" name="password" placeholder="Password" required></input><br />
                    <input type="password" id="password2" name="password2" placeholder="Confirm Password" required></input><br />
                    <div id="login-button"><input type="submit" value="Sign Up" /></div>
                </form>
                <span id="unregistered-user-text">
                    Already have an account?&nbsp;
                    <button className="linkButton" onClick={this.redirectToLogin}>Click here</button>
                    &nbsp;to Login!
                </span>
            </div>
        )
    }
}

export default SignUpCard