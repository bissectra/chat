import "./LeftFrame.css";
import React from "react";
import UserIcon from "./UserIcon";
import Contacts from "./Contacts";
import Menu from "../Menu";
import Input from "../Input";

class LeftFrame extends React.Component {
  render() {
    return (
      <div>
        <div className="left-header">
          <UserIcon sex={"NB"} username={"<testuser>"} />
          <Menu color={"primary"} />
        </div>
        <Input />
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
