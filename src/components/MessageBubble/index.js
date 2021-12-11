import "./styles.css";
import React from "react";
import { formatTime } from "../../utils";

const MessageBubble = (props) => {
  return (
    <div className={(props.mine ? "" : "not-") + "mine message"}>
      {!props.mine && (
        <div style={{ fontWeight: "bold" }}>{props.user.username}</div>
      )}
      <div>
        <span>{props.text} </span>
        <span style={styles.time}>{formatTime(props.time)}</span>
      </div>
    </div>
  );
};

const styles = {
  time: {
    paddingLeft: "0.5em",
    float: "right",
    color: "#666",
  },
};

export default MessageBubble;
