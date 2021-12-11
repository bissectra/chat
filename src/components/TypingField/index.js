import "./styles.css";
import React from "react";
import InputEmoji from "react-input-emoji";
import { useState } from "react";
import saveMessage from "./saveMessage";

const TypingField = (props) => {

  const [text, setText] = useState("")

  const handleOnEnter = () => {
    handleKeyUp({code: "Enter"})
  }

  const handleInputChange = (event) => {
    setText(event)
  };

  const handleKeyUp = (event) => {
    if (event.code === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (text !== "") {
      props.handleMessagesChanged(text);
      saveMessage(text, props.conversationId);
      setText("")
    }
  };

  return (
    <div className="main-typing">
      <div className="input-field">
        <div className="inputs">
          <InputEmoji
            value={text}
            className="typing-bar"
            type="text"
            name="input-text"
            placeholder="Type your message"
            onChange={handleInputChange}
            onEnter={handleOnEnter}
            placeholder="Type a message"
          />
          <input
            className="send-button"
            type="submit"
            name="input-button"
            value="Send"
            onClick={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default TypingField;
