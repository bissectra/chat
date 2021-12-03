import "./styles.css";
import React from "react";
import LeftFrame from "./../LeftFrame";
import RightFrame from "./../RightFrame";
import axios from "axios";

class ChatBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: -1,
      conversations: [],
    };
  }

  componentDidMount() {
    this.getConversations();
  }

  async getConversations() {
    axios
      .get("http://localhost:3000/conversation", {
        headers: {
          Authorization: "Bearer " + this.props.token,
        },
      })
      .then((response) => {
        this.setState({ conversations: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  selectContactHandler = (index) => {
    this.setState({ selected: index });
  };

  render() {
    return (
      <div className="main-chat">
        <div className="chat-header" />
        <div className="chat-frame">
          <div className="left-frame">
            <LeftFrame
              token={this.props.token}
              conversations={this.state.conversations}
              contacts={this.state.contacts}
              selected={this.state.selected}
              selectContactHandler={this.selectContactHandler}
            />
          </div>
          <div className="right-frame">
            <RightFrame
              conversation={
                this.state.selected !== -1
                  ? this.state.conversations[this.state.selected]
                  : {}
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBody;
