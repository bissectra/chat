import './LoginCard.css'
import React from 'react';
import axios from 'axios';
import { baseURL } from '../../constants';

class LoginCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameOrEmail: '',
            password: '',
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.login();
    }

    login() {
        axios.post(`${baseURL}/user/login`, {
            "email": this.state.usernameOrEmail,
            "password": this.state.password
        }).then((response) => {
            this.redirectToChat(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    redirectToChat = (responseData) => {
        this.props.pageChanger("chat", responseData)
    }

    redirectToSignUp = () => {
        this.props.pageChanger("signUp")
    }

    render() {
        return (
            <div className="Card">
                <h1>Chat App</h1>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        id="usernameOrEmail"
                        name="usernameOrEmail"
                        placeholder="Email"
                        onChange={(event) => this.setState({ usernameOrEmail: event.target.value })}
                    ></input><br />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={(event) => this.setState({ password: event.target.value })}
                    ></input><br />
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

