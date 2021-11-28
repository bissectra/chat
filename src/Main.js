import React from "react";
import { Navigate } from "react-router";

export default function Main({ isLogged, user, logout }) {
  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <span>Hi {user.username}! </span>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
