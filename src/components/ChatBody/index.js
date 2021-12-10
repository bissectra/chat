import "./styles.css";
import React, { useEffect, useState } from "react";
import LeftFrame from "./../LeftFrame";
import RightFrame from "./../RightFrame";
import getConversations from "./getConversations";

export default function ChatBody() {
  const [selected, setSelected] = useState(-1);
  const [conversations, setConversations] = useState([]);

  useEffect(() => getConversations(setConversations), []);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className="main-chat">
      <div className="chat-header" />
      <div className="chat-frame">
        <div className="left-frame">
          <LeftFrame
            conversations={conversations}
            selected={selected}
            selectContactHandler={handleSelect}
          />
        </div>
        <div className="right-frame">
          <RightFrame
            conversation={selected !== -1 ? conversations[selected] : {}}
            contactClicked={selected !== -1 ? true : false}
          />
        </div>
      </div>
    </div>
  );
}
