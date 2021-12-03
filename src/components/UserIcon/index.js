export default function UserIcon({ username }) {
  const seed = username;
  const sprites = "jdenticon";
  const url = `url(https://avatars.dicebear.com/api/${sprites}/${seed}.svg?background=%23ffffff)`;
  return <div style={{ ...style, backgroundImage: url }} />;
}

const style = {
  width: "6.5vh",
  height: "6.5vh",
  borderRadius: "50%",
  backgroundColor: "white",
};
