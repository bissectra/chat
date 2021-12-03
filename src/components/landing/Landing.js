import "./Landing.css";
import React from "react";
import LoginCard from "./LoginCard";
import SignUpCard from "./SignUpCard.js";

class Landing extends React.Component {
  render() {
    let inner = (
      <div className="main">
        Error: 'page' prop must be set either to 'login' or to 'signUp',
        currently set to '{this.props.page}'
      </div>
    );
    if (this.props.page === "login") {
      inner = (
        <div className="main">
          <LoginCard pageChanger={this.props.pageChanger} />
        </div>
      );
    } else if (this.props.page === "signUp") {
      inner = (
        <div className="main">
          <SignUpCard pageChanger={this.props.pageChanger} />
        </div>
      );
    }
    return (
      <div className="wrapper">
        <div id="background">
          <div className="background-top"></div>
          <div className="background-bottom"></div>
        </div>
        <div className="content">{inner}</div>
      </div>
    );
  }
}

export default Landing;
