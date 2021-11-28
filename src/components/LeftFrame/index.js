import "./styles.css";
import React from "react";
import UserIcon from "../UserIcon";
import Contacts from "../Contacts";
import Menu from "../Menu";
import InputBar from "../InputBar";

class LeftFrame extends React.Component {
  render() {
    return (
      <div>
        <div className="left-header">
          <UserIcon sex={"NB"} username={"<testuser>"} />
          <Menu color={"primary"} />
        </div>
        <InputBar />
        <Contacts
          token={this.props.token}
          conversations={this.props.conversations}
          contacts={this.props.contacts}
          selected={this.props.selected}
          selectContactHandler={this.props.selectContactHandler}
        />
      </div>
    );
  }
}

export default LeftFrame;
