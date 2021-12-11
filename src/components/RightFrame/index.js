import "./styles.css";
import TypingField from "../TypingField";
import UserIcon from "../UserIcon";
import React from "react";
import MessageBubble from "../MessageBubble";
import Menu from "../Menu";

const RightFrame = (props) => {
  const sendNewMessage = (message) => {
    console.log(message);
    // let newMessages = this.state.messages;
    // newMessages.push(<MessageBubble mine={true} text={message} />);
    // this.setState({ messages: newMessages }, () => {
    //   let messagesField = document.getElementsByClassName("messages-field")[0];
    //   messagesField.scrollTo(0, messagesField.scrollHeight);
    // });
  };
  const items = [
    {
      name: "Logout",
      action: () => {
        localStorage.clear();
        window.location = "/";
      },
    },
  ];

  if (!props.contactClicked) {
    return (
      <div className="right-frame-wrapper empty">
        <div className="right-header"></div>
        <div className="messages-field">
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
        <div className="right-header">
          <UserIcon username={""} />
          <Menu items={items} />
        </div>
        <div className="messages-field">{messages}</div>
        <div className="typing-field">
          <TypingField
            conversationId={props.conversation._id}
            myUser={props.myUser}
            handleMessagesChanged={sendNewMessage}
          />
        </div>
      </div>
    );
  }
};

export default RightFrame;
