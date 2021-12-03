import React from "react";

export default function MessageBubble({ text, mine }) {
  const style = { ...styles.bubble, ...(mine ? styles.mine : styles.notMine) };
  const textStyle = {
    ...styles.text,
    ...(mine ? styles.mineText : styles.notMineText),
  };
  return (
    <div style={style}>
      <p style={textStyle}>{text}</p>
    </div>
  );
}

const styles = {
  bubble: {
    margin: "1vw",
    backgroundColor: "lightyellow",
    borderRadius: "1vw",
    position: "relative",
    fontSize: 14,
    maxWidth: "70%",
  },
  notMine: {
    marginRight: "auto",
  },
  mine: {
    marginLeft: "auto",
  },
  text: {
    padding: "0.7em",
  },
  mineText: {
    textAlign: "right",
  },
  notMineText: {
    textAlign: "left",
  },
};
