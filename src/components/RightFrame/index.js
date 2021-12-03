import "./styles.css";
import TypingField from "../TypingField";
import UserIcon from "../UserIcon";
import MessageBubble from "../MessageBubble";
import Menu from "../Menu";
import { useEffect, useState } from "react";

export default function RightFrame({ contact }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => loadMessages(), [contact]);

  function scrollToEnd() {
    let messagesField = document.getElementsByClassName("messages-field");
    messagesField[0].scrollTo(0, messagesField[0].scrollHeight);
  }

  const loadMessages = () =>
    setMessages([
      <MessageBubble mine={false} text={"Eu te amo, João <3"} />,
      <MessageBubble mine={true} text={"Eu também te amo, Maria <3 <3"} />,
    ]);

  const sendNewMessage = (message) => {
    const newMessage = <MessageBubble mine={true} text={message} />;
    setMessages((messages) => messages.concat(newMessage));
    scrollToEnd();
  };

  if (!contact) return <div>Choose a contact to start chatting!</div>;

  return (
    <div className="right-frame-wrapper">
      <div className="right-header">
        <UserIcon username={contact} />
        {contact}
        <Menu color={"secondary"} />
      </div>
      <div className="messages-field">
        {messages.map((message, index) => (
          <span key={index}>{message}</span>
        ))}
      </div>
      <div className="typing-field">
        <TypingField handleMessagesChanged={sendNewMessage} />
      </div>
    </div>
  );
}
