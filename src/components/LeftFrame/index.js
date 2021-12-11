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
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState();
  useEffect(() => {
    const user = getUser();
    setUsername(user.username);
  }, []);

  const editSearchItem = (event) => {
    setSearch(event.target.value)
  }

  const dynamicSearch = () => {
    return conversations.filter(conversation => conversation.name.toLowerCase().includes(search.toLowerCase()))
  }

  let items = [
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
        <div style={{ marginLeft: "0.5em" }} className="contact-title">
          {username}
        </div>
        <Menu items={items} />
      </div>
      <Input handler={editSearchItem}/>
      <Contacts
        conversations={dynamicSearch()}
        selected={selected}
        selectContactHandler={selectContactHandler}
      />
    </div>
  );
}
