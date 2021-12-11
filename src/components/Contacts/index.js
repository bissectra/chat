import "./styles.css";
import Contact from "../Contact";
import React from "react";

const Contacts = (props) => {
  const contacts = props.conversations.map((conversation, index) => {
    return (
      <div
        key={index}
        onClick={() => props.selectContactHandler(conversation._id)}
        className={"contact" + (props.selected === index ? " selected" : "")}
      >
        <Contact
          index={index}
          conversation={conversation}
          messages={conversation.messages}
        />
      </div>
    );
  });
  return <div className="contacts">{contacts}</div>;
};

export default Contacts;
