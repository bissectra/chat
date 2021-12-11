import "./styles.css";
import React from "react";
import UserIcon from "../UserIcon";
import { formatTime } from "../../utils";

const Contact = (props) => {
  let statusClassName = "status-icon double-tick";
  let statusDiv = <div className={statusClassName}></div>;

  const lastMessage =
    props.messages[props.messages.length - 1] !== undefined
      ? props.messages[props.messages.length - 1].text
      : "";

  return (
    <div>
      <hr style={{ margin: 0 }} />
      <div className="contact-wrapper">
        <div className="contact-icon-section">
          <div className="user-icon">
            <UserIcon seed={props.conversation.name || "random"} />
          </div>
        </div>
        <div className="contact-text-section">
          <div className="contact-title">{props.conversation.name}</div>
          <div className="contact-message">
            {statusDiv} {lastMessage}
          </div>
        </div>
        <div className="meta">
          <div className="date">{formatTime(props.conversation.updatedAt)}</div>
          <div className="unread-counter"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
