import "./styles.css";
import UserIcon from "../UserIcon";
import Contacts from "../Contacts";
import Menu from "../Menu";
import Input from "../Input";

export default function LeftFrame({
  username,
  token,
  conversations,
  selected,
  selectContactHandler,
}) {
  return (
    <div>
      <div className="left-header">
        <UserIcon username={username} />
        <Menu color={"primary"} />
      </div>
      <Input />
      <Contacts
        token={token}
        conversations={conversations}
        selected={selected}
        selectContactHandler={selectContactHandler}
      />
    </div>
  );
}
