import './Landing.css'
import React from "react";
import LoginCard from './LoginCard';
import SignUpCard from './SignUpCard.js';

class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 'page': props.initialPage }
    }

    render() {
        let inner = (
            <div className="main" >
                Error: 'initialPage' prop must be set either to 'login' or to 'signUp'
            </div>
        )
        if (this.state.page === 'login') {
            inner = (
                <div className="main">
                    <LoginCard />
                </div>
            )
        } else if (this.state.page === 'signUp') {
            inner = (
                <div className="main">
                    <SignUpCard />
                </div>
            )
        }
        return (
            <div className="wrapper">
                <div id="background">
                    <div className="background-top"></div>
                    <div className="background-bottom"></div>
                </div>
                <div className="content">
                    {inner}
                </div>
            </div>
        )
    }
}

export default Landing;
