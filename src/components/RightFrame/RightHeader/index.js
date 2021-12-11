import { Fragment } from "react";
import Menu from "../../Menu";
import UserIcon from "../../UserIcon";

const RightHeader = ({ title }) => (
  <div className="right-header">
    {title && (
      <Fragment>
        <UserIcon seed={title} />
        <span style={{ marginLeft: "0.5em" }} className="contact-title">
          {title}
        </span>
      </Fragment>
    )}
    <Menu items={items} />
  </div>
);

const items = [
  {
    name: "Logout",
    action: () => {
      localStorage.clear();
      window.location = "/";
    },
  },
];

export default RightHeader;
