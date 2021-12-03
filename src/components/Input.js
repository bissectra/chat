export default function Input() {
  return (
    <div style={styles.wrapper}>
      {/* TODO Search / Back Icon */}
      <div style={styles.icon({ radius: "4vh", top: "2vh", left: "2vw" })} />
      <div style={styles.barWrapper}>
        <input style={styles.bar} type="text" />
      </div>
      {/* TODO Loading Icon */}
      <div style={styles.icon({ radius: "3vh", top: "2.5vh", left: "27vw" })} />
    </div>
  );
}

const styles = {
  wrapper: {
    height: "8vh",
    backgroundColor: "var(--primaryColorVariant)",
    position: "relative",
  },
  barWrapper: {
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    position: "relative",
    height: "100%",
  },
  bar: {
    margin: "0 1vw",
    width: "100%",
    height: "75%",
    borderRadius: "4vh",
    backgroundColor: "var(--primaryColorLight)",
    border: "none",
    paddingLeft: "4.8vw",
    paddingRight: "2.5vw",
    paddingTop: "0.5vh",
    fontSize: "14px",
    color: "var(--textColorLightVariant)",
  },
  icon: ({ radius, top, left }) => ({
    position: "absolute",
    width: radius,
    height: radius,
    borderRadius: "50%",
    zIndex: 100,
    backgroundColor: "var(--primaryColor)",
    top: top,
    left: left,
  }),
};
