import { useState } from "react";
import LoginCard from "../LoginCard";
import SignUpCard from "../SignUpCard/index.js";
import Background from "./Background";

export default function Landing() {
  const [page, setPage] = useState("login");
  const togglePage = () => setPage(page === "login" ? "signup" : "login");

  if (page === "login") {
    return (
      <Background>
        <LoginCard togglePage={togglePage} />
      </Background>
    );
  }

  if (page === "signup") {
    return (
      <Background>
        <SignUpCard togglePage={togglePage} />
      </Background>
    );
  }

  return null;
}
