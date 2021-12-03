import "./styles.css";
import Contact from "../Contact";
import React from "react";

// contactClicked(index) {
//   console.log("contact clicked");
//   selectContactHandler(index);
// }

export default function Contacts({
  token,
  conversations,
  selectContactHandler,
  selected,
}) {
  let contacts =
    conversations.length === 0 ? (
      <h1>:(</h1>
    ) : (
      conversations.map((conversation, index) => {
        return (
          <div
            key={index}
            // onClick={(event) => this.contactClicked(index)}
            className={"contact" + (selected === index ? " selected" : "")}
          >
            <Contact token={token} contactId={conversation.users[1].user} />
          </div>
        );
      })
    );

  return <div className="contacts">{contacts}</div>;
}
