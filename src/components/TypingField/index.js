import "./styles.css";
import axios from "axios";
import React from "react";
import { baseURL } from "../../constants";
import InputEmoji from "react-input-emoji";

class TypingField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleOnEnter = () => {
    this.handleKeyUp({code: "Enter"})
  }

  handleInputChange = (event) => {
    this.setState({ text: event });
  };

  handleKeyUp = (event) => {
    if (event.code === "Enter") {
      this.handleSendMessage();
    }
  };

  handleSendMessage = () => {
    if (this.state.text !== "") {
      this.props.handleMessagesChanged(this.state.text);
      this.saveMessage(this.state.text);
      this.setState({ text: "" });
    }
  };

  saveMessage(newmessage) {
    axios
      .put(`${baseURL}/conversation/615cbcb993a48d7375bd4c0f`, {
        message: newmessage,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="main-typing">
        <div className="input-field">
          <div className="inputs">
            <InputEmoji
              value={this.state.text}
              className="typing-bar"
              type="text"
              name="input-text"
              placeholder="Type your message"
              onChange={this.handleInputChange}
              onEnter={this.handleOnEnter}
              placeholder="Type a message"
            />
            <input
              className="send-button"
              type="submit"
              name="input-button"
              value="Send"
              onClick={this.handleSendMessage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TypingField;
