import "./styles.css";
import React, { useState } from "react";
import saveMessage from "./saveMessage";

const TypingField = (props) => {

  const [text, setText] = useState("")

  const handleInputChange = (event) => {
    setText(event.target.value)
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
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
            value={text}
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
