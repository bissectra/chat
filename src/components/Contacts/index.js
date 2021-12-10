import "./styles.css";
import Contact from "../Contact";
import React from "react";

const Contacts = (props) => {
  const contacts = 
    props.conversations.length === 0 ? (
      <h1>:(</h1>
    ) : (
      props.conversations.map((conversation, index) => {
        return (
          <div
            key={index}
            onClick={ props.selectContactHandler(index) }
            className={
              "contact" + (props.selected === index ? " selected" : "")
            }
          >
            <Contact
              conversation={conversation}
              contactId={conversation.users[1].user}
            />
          </div>
        );
      })
    );
    console.log(props.conversations)
  return (
    <div className="contacts">
      {contacts}
    </div>
  )
}

export default Contacts;
