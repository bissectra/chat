import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Menu(props) {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
    console.log(props.color)
  };

  return (
    <Dropdown style={{width: '100%', zIndex: 1000}}>
        <Dropdown.Toggle bsPrefix="p-0" style={{backgroundColor: 'rgba(255, 255, 255, .0)', fontSize: '20px', boxShadow: '0 0 0 0 rgba(255, 255, 255, .0)', borderColor: 'rgba(255, 255, 255, .0)', float: 'right'}}>
          <div style={styles.menuIcon(props.color, active)} onClick={toggle}>
            <div style={styles.kebab}>
              <div style={styles.circle}></div>
              <div style={styles.circle}></div>
              <div style={styles.circle}></div>
            </div>
          </div>
        </Dropdown.Toggle>
      <Dropdown.Menu>
        {props.items.map((item) => {
          return (
            <Dropdown.Item style={{fontSize: '20px'}} onClick={item.action}>{item.name}</Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
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
