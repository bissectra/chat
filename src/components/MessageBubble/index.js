import "./styles.css";
import React from "react";

const MessageBubble = (props) => {
  return (
    <div className={(props.mine ? "" : "not-") + "mine message"}>
      <span>{props.user.username}</span>
      <p className="message-text">{props.text}</p>
    </div>
  );
}

export default MessageBubble;
