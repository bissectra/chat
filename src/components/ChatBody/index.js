import React, { useEffect, useState } from "react";
import LeftFrame from "./../LeftFrame";
import RightFrame from "./../RightFrame";
import getConversations from "./getConversations";

export default function ChatBody({ token, user, selected, logout }) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => getConversations(token, setConversations), []);
  return (
    <div style={{ display: "flex" }}>
      <span>Hi {user.username}! </span>
      <button onClick={logout}>Logout</button>
      <LeftFrame
        token={token}
        conversations={conversations}
        selected={selected}
      />
      <RightFrame conversation={selected ? conversations[selected] : {}} />
    </div>
  );
}
