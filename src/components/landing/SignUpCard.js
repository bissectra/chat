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
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.login}>
                    <input type="email" id="email" name="email" placeholder="Email"></input><br />
                    <input type="text" id="username" name="username" placeholder="Username"></input><br />
                    <div id="sex-input" className="boxed">
                        <div id="sex-input-title">
                            <label for="sex-input" style={{ color: '#929292' }}>
                                Sex
                            </label>
                        </div>
                        <div id="sex-input-content" className="radio-button-group">
                            <div>
                                <input type="radio" id="sexFeminine" name="sex" placeholder="sex" />
                                <label for="sexFeminine">Feminine</label>
                            </div>
                            <div>
                                <input type="radio" id="sexMasculine" name="sex" placeholder="sex" />
                                <label for="sexMasculine">Masculine</label><br />
                            </div>
                            <div>
                                <input type="radio" id="sexNonBinary" name="sex" placeholder="sex" />
                                <label for="sexNonBinary">Non-binary</label>
                            </div>
                            <div>
                                <input type="radio" id="sexOther" name="sex" placeholder="sex" />
                                <label for="sexOther">Other</label>
                            </div>
                        </div>
                    </div>
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