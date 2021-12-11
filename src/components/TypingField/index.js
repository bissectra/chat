import "./styles.css";
import React, { useEffect, useRef } from "react";
import InputEmoji from "react-input-emoji";
import { useState } from "react";
import saveMessage from "./saveMessage";

const TypingField = (props) => {
  const [text, setText] = useState("");

  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  const handleOnEnter = () => {
    handleKeyUp({ code: "Enter" });
  };

  const handleInputChange = (event) => {
    setText(event);
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
      setText("");
    }
  };

  return (
    <div className="main-typing">
      <div className="input-field">
        <div className="inputs">
          <InputEmoji
            ref={inputElement}
            value={text}
            className="typing-bar"
            type="text"
            name="input-text"
            placeholder="Type your message"
            onChange={handleInputChange}
            onEnter={handleOnEnter}
            autoFocus
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
};

export default TypingField;
