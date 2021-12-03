import "./styles.css";
import React from "react";
import UserIcon from "../UserIcon";
import Contacts from "../Contacts";
import Menu from "../Menu";
import InputBar from "../InputBar";

export default function LeftFrame({
  token,
  conversations,
  selected,
  contacts,
  selectContactHandler,
}) {
  return (
    <div>
      <div className="left-header">
        <UserIcon sex={"NB"} username={"<testuser>"} />
        <Menu color={"primary"} />
      </div>
      <InputBar />
      <Contacts
        token={token}
        conversations={conversations}
        contacts={contacts}
        selected={selected}
        selectContactHandler={selectContactHandler}
      />
    </div>
  );
}
