import "./styles.css";
import TypingField from "../TypingField";
import UserIcon from "../UserIcon";
import React, { Fragment } from "react";
import MessageBubble from "../MessageBubble";
import Menu from "../Menu";

const RightFrame = (props) => {
  if (!props.contactClicked) {
    return (
      <div className="right-frame-wrapper empty">
        <RightHeader />
        <div style={styles.welcomeText} className="messages-field">
          Choose a contact to start chatting!
        </div>
      </div>
    );
  } else {
    const messages = props.conversation.messages.map((message, index) => {
      const isMyMessage = props.myUser._id === message.user;
      const user = props.conversation.users.find(
        (user) => user._id === message.user
      );
      return (
        <MessageBubble
          key={index}
          mine={isMyMessage}
          text={message.text}
          user={user}
        />
      );
    });

    return (
      <div className="right-frame-wrapper">
        <RightHeader title={props.conversation.name} />
        <div className="messages-field">{messages}</div>
        <div className="typing-field">
          <TypingField
            conversationId={props.conversation._id}
            myUser={props.myUser}
            handleMessagesChanged={props.pushMyMessage}
          />
        </div>
      </div>
    );
  }
};

const RightHeader = ({ title }) => (
  <div className="right-header">
    {title && (
      <Fragment>
        <UserIcon seed={title} />
        <span style={{ marginLeft: "0.5em" }} className="contact-title">
          {title}
        </span>
      </Fragment>
    )}
    <Menu items={items} />
  </div>
);

const items = [
  {
    name: "Logout",
    action: () => {
      localStorage.clear();
      window.location = "/";
    },
  },
];

const styles = {
  welcomeText: { textAlign: "center", fontSize: 36, fontWeight: "bold" },
};

export default RightFrame;
