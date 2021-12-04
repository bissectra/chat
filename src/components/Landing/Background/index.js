import "./styles.css";
export default function Background({ children: inner }) {
  return (
    <div className="wrapper">
      <div id="background">
        <div className="background-top"></div>
        <div className="background-bottom"></div>
      </div>
      <div className="content">
        <div className="main">{inner}</div>
      </div>
    </div>
  );
}
