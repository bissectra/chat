import "./colors.css";
import ChatBody from "./components/ChatBody";
import Private from "./components/Private";

export default function App() {
  return (
    <Private>
      <ChatBody />
    </Private>
  );
}
