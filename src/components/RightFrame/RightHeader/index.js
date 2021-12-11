import { Fragment } from "react";
import Menu from "../../Menu";
import UserIcon from "../../UserIcon";
import ReactTooltip from "react-tooltip";

const RightHeader = ({ title, users, myUser }) => {
  const usernames =
    users &&
    users
      .filter((user) => user._id !== myUser._id)
      .map((user) => user.username)
      .concat("You");
  return (
    <div className="right-header">
      {title && (
        <Fragment>
          <UserIcon seed={title} />
          <div style={{ marginLeft: "0.5em" }}>
            <div className="contact-title">{title}</div>
            <div
              style={{
                maxWidth: (window.innerWidth * 60) / 100,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              className="contact-message"
              data-tip={usernames.join("<br />")}
            >
              {usernames.join(", ")}
              <ReactTooltip multiline />
            </div>
          </div>
        </Fragment>
      )}
      <Menu items={items} />
    </div>
  );
};

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
