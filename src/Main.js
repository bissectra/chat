import React from "react";
import { Navigate } from "react-router";
import ChatBody from "./components/ChatBody";

export default function Main({ token, isLogged, user, logout }) {
  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return <ChatBody token={token} user={user} logout={logout} />;
}
