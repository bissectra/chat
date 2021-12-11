import Dropdown from "react-bootstrap/Dropdown";

export default function Menu({ items }) {
  return (
    <Dropdown style={{ marginLeft: "auto", zIndex: 1000 }}>
      <Dropdown.Toggle bsPrefix="p-0" style={styles.dd}>
        <div style={styles.menuIcon}>
          <div style={styles.kebab}>
            <div style={styles.circle}></div>
            <div style={styles.circle}></div>
            <div style={styles.circle}></div>
          </div>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item key={index} onClick={item.action}>
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

const circleRadius = 4;
const styles = {
  dd: {
    backgroundColor: "rgba(255, 255, 255, .0)",
    boxShadow: "0 0 0 0 rgba(255, 255, 255, .0)",
    borderColor: "rgba(255, 255, 255, .0)",
    float: "right",
  },
  circle: {
    width: circleRadius,
    height: circleRadius,
    backgroundColor: "var(--primaryColorVariant)",
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
  menuIcon: {
    marginLeft: "auto",
    width: "6vh",
    height: "6vh",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
};
