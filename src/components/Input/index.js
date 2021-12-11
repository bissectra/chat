import "./styles.css";
import React from "react";

class Input extends React.Component {

  render() {
    return (
      <div className="input-wrapper">
        <div className="icon" id="icon1"></div>
        <div className="bar-wrapper">
          <input className="bar" type="text" onChange={this.props.handler} placeholder="Search for conversation"></input>
        </div>
        <div className="icon" id="icon2"></div>
      </div>
    );
  }
}

export default Input;
