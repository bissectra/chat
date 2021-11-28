import "./styles.css";

export default function InputBar() {
  return (
    <div className="wrapper">
      <div className="icon" id="icon1"></div>
      <div className="bar-wrapper">
        <input className="bar" type="text"></input>
      </div>
      <div className="icon" id="icon2"></div>
    </div>
  );
}
