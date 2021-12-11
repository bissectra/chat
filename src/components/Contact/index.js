import "./styles.css";
import React from "react";
import UserIcon from "../UserIcon";

const Contact = (props) => {
  let statusClassName = "status-icon double-tick";
  let statusDiv = <div className={statusClassName}></div>;

  const lastMessage =
    props.messages[0] !== undefined ? props.messages[0].text : "";

  const formatDate = (time) => {
    const date = new Date(time);
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return hour + ":" + minutes;
  };

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
            <div>
              {statusDiv} {lastMessage}
            </div>
          </div>
        </div>
        <div className="meta">
          <div className="date">{formatDate(props.conversation.updatedAt)}</div>
          <div className="unread-counter"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
