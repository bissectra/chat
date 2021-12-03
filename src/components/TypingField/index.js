import "./styles.css";
import axios from "axios";
import React from "react";

class TypingField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ text: event.target.value });
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
      .put("http://localhost:3001/conversation/615cbcb993a48d7375bd4c0f", {
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
        <div className="emojis">
          <img
            className="emoji-image"
            alt="emoji icon"
            src="https://static.vecteezy.com/system/resources/previews/001/203/011/non_2x/emoji-png.png"
          />
        </div>
        <div className="input-field">
          <div className="inputs">
            <input
              className="typing-bar"
              type="text"
              name="input-text"
              placeholder="Type your message"
              onChange={this.handleInputChange}
              value={this.state.text}
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
