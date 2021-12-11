import { Fragment } from "react";
import Menu from "../../Menu";
import UserIcon from "../../UserIcon";

const RightHeader = ({ title, users, myUser }) => {
  const usernames =
    users &&
    users
      .filter((user) => user._id !== myUser._id)
      .map((user) => user.username)
      .concat("You")
      .join(", ");
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
            >
              {usernames}
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
