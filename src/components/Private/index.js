import { Fragment } from "react";
import Landing from "../Landing";

export default function Private({ children: element }) {
  const token = getToken();
  const isLogged = isValidToken(token);

  if (!isLogged) return <Landing />;

  return <Fragment>{element}</Fragment>;
}

const getToken = () => localStorage.getItem("token");

// TODO: make a request to verify token in backend (not yet implemented)
const isValidToken = (token) => !!token;
