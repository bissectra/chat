import "./colors.css";
import Landing from "./components/landing/Landing";
import React, { useState } from "react";
import ChatBody from "./components/chat/ChatBody";

export default function App() {
  const [token, setToken] = useState("");
  const [currentPage, setCurrentPage] = useState("login");
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  function pageChanger(page, token, user) {
    if (page === "chat") {
      setToken(token);
      setUser(user);
      setIsLogged(true);
    }
    setCurrentPage(page);
  }

  return !isLogged ? (
    <Landing page={currentPage} pageChanger={pageChanger} />
  ) : (
    <ChatBody user={user} token={token} />
  );
}
