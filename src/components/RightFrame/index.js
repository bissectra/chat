import "./styles.css";
import TypingField from "../TypingField";
import UserIcon from "../UserIcon";
import React from "react";
import MessageBubble from "../MessageBubble";
import Menu from "../Menu";

const RightFrame = (props) => {

  const sendNewMessage = (message) => {
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
  }
  else{
    const messages = props.conversation.messages.map((message, index) => {
      return <MessageBubble mine={false} text={message.text} />
    })

    return(
      <div className="right-frame-wrapper">
        <div className="right-header">
          <UserIcon username={''} />
          <Menu color={"secondary"} items={items} />
        </div>
        <div className="messages-field">
          {messages}
        </div>
        <div className="typing-field">
          <TypingField handleMessagesChanged={sendNewMessage} />
        </div>
      </div>
    )
  }
}

export default RightFrame;
