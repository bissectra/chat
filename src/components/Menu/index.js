import { useState } from "react";

export default function Menu({ color }) {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };

  return (
    <div style={styles.menuIcon(color, active)} onClick={toggle}>
      <div style={styles.kebab}>
        <div style={styles.circle}></div>
        <div style={styles.circle}></div>
        <div style={styles.circle}></div>
      </div>
    </div>
  );
}

const circleRadius = 4;
const styles = {
  circle: {
    width: circleRadius,
    height: circleRadius,
    backgroundColor: "white",
    borderRadius: "50%",
  },
  kebab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "inherit",
    height: "3vh",
  },
  menuIcon: (color, active) => {
    let bgColor = null;
    if (active) {
      if (color === "primary") bgColor = "var(--primaryColorVariant)";
      if (color === "secondary") bgColor = "var(--secondaryColorVariant)";
    }
    return {
      marginLeft: "auto",
      width: "6vh",
      height: "6vh",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      backgroundColor: bgColor,
    };
  },
};
