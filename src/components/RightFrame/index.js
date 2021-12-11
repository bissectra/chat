import "./styles.css";
import TypingField from "../TypingField";
import MessageBubble from "../MessageBubble";
import RightHeader from "./RightHeader";
import Unselected from "./Unselected";

const RightFrame = (props) => {
  if (!props.contactClicked) return <Unselected />;

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
        time={message.time}
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
};

export default RightFrame;
