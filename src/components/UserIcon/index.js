import { fixedEncodeURIComponent } from "../../utils";

export default function UserIcon(props) {
  const sprites = "jdenticon";
  const seed = fixedEncodeURIComponent(props.seed);
  const url = `url(https://avatars.dicebear.com/api/${sprites}/${seed}.svg?background=%23ffffff)`;
  return <div style={{ ...style, backgroundImage: url }} />;
}

const style = {
  width: "6.5vh",
  height: "6.5vh",
  borderRadius: "50%",
  backgroundColor: "white",
};
