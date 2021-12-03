import "./styles.css";
import React, { useEffect, useState } from "react";
import LeftFrame from "./../LeftFrame";
import RightFrame from "./../RightFrame";
import getConversations from "./getConversations";

export default function ChatBody({ token }) {
  const [selected, setSelected] = useState(-1);
  const [conversations, setConversations] = useState([]);

  useEffect(() => getConversations(token, setConversations), []);

  return (
    <div className="main-chat">
      <div className="chat-header" />
      <div className="chat-frame">
        <div className="left-frame">
          <LeftFrame
            token={token}
            conversations={conversations}
            selected={selected}
            selectContactHandler={(index) => setSelected(index)}
          />
        </div>
        <div className="right-frame">
          <RightFrame
            conversation={selected !== -1 ? conversations[selected] : {}}
          />
        </div>
      </div>
    </div>
  );
}
