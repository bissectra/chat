import "./styles.css";
import UserIcon from "../UserIcon";
import Contacts from "../Contacts";
import Menu from "../Menu";
import Input from "../Input";
import { useEffect, useState } from "react";
import { getUser } from "../Private";

export default function LeftFrame({
  conversations,
  selected,
  selectContactHandler,
}) {
  const [username, setUsername] = useState();
  useEffect(() => {
    const user = getUser();
    setUsername(user.username);
  }, []);

  let items = [
    {
      name: "Logout",
      action: () => {
        localStorage.clear();
        window.location = "/";
      },
    },
    {
      name: "New Group",
      action: () => {
        window.location = "/createconversation";
      },
    },
  ];

  return (
    <div>
      <div className="left-header">
        <UserIcon seed={username} />
        <Menu items={items} />
      </div>
      <Input />
      <Contacts
        conversations={conversations}
        selected={selected}
        selectContactHandler={selectContactHandler}
      />
    </div>
  );
}
