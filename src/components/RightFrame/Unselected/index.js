import RightHeader from "../RightHeader";

const Unselected = () => (
  <div className="right-frame-wrapper empty">
    <RightHeader />
    <div style={styles.welcomeText} className="messages-field">
      Choose a contact to start chatting!
    </div>
  </div>
);

const styles = {
  welcomeText: {
    height: "91vh",
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    justifyContent: "center",
  },
};

export default Unselected;
