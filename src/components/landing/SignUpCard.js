import './SignUpCard.css'
import React from 'react';
import axios from 'axios';

class SignUpCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password2: '',
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.signUp();
    }

    async signUp() {
        axios.post("http://localhost:3000/user", {
            "username": this.state.username,
            "email": this.state.email,
            "password": this.state.password,
        }).then((response) => {
            console.log(response);
            this.redirectToLogin();
        }).catch((error) => {
            console.log(error);
        })
    }

    redirectToChat = () => {
        this.props.pageChanger("chat")
    }

    redirectToLogin = () => {
        this.props.pageChanger("login")
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.submitHandler}>
                    <input type="email" id="email" name="email" placeholder="Email"
                        onChange={(event) => this.setState({ email: event.target.value })} /><br />
                    <input type="text" id="username" name="username" placeholder="Username"
                        onChange={(event) => this.setState({ username: event.target.value })} /><br />
                    <div id="sex-input" className="boxed">
                        <div id="sex-input-title">
                            <label htmlFor="sex-input" style={{ color: '#929292' }}>
                                Sex
                            </label>
                        </div>
                        <div id="sex-input-content" className="radio-button-group">
                            <div>
                                <input type="radio" id="sexFeminine" name="sex" />
                                <label htmlFor="sexFeminine">Feminine</label>
                            </div>
                            <div>
                                <input type="radio" id="sexMasculine" name="sex" />
                                <label htmlFor="sexMasculine">Masculine</label><br />
                            </div>
                            <div>
                                <input type="radio" id="sexNonBinary" name="sex" />
                                <label htmlFor="sexNonBinary">Non-binary</label>
                            </div>
                            <div>
                                <input type="radio" id="sexOther" name="sex" />
                                <label htmlFor="sexOther">Other</label>
                            </div>
                        </div>
                    </div>
                    <input type="password" id="password" name="password" placeholder="Password" required
                        onChange={(event) => this.setState({ password: event.target.value })}></input><br />
                    <input type="password" id="password2" name="password2" placeholder="Confirm Password" required
                        onChange={(event) => this.setState({ password2: event.target.value })}></input><br />
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