import "./styles.css";
import React from "react";

const MessageBubble = (props) => {
  return (
    <div className={(props.mine ? "" : "not-") + "mine message"}>
      <span className="message-author">{props.user.username}</span>
      <br />
      <span className="message-text">{props.text}</span>
    </div>
  );
};

export default MessageBubble;
