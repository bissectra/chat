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
      name: 'Perfil',
      action: 'teste'
    },
    {
      name: 'Sair',
      action: () => {
        localStorage.clear();
        window.location = "/";
      }
    },
  ]

  return (
    <div>
      <div className="left-header">
        <UserIcon username={username} />
        <Menu color={"primary"} items={items}/>
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
