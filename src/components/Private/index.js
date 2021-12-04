import { Fragment } from "react";
import Landing from "../Landing";

export default function Private({ children: element }) {
  const token = getToken();
  const isLogged = isValidToken(token);

  if (!isLogged) return <Landing />;

  return <Fragment>{element}</Fragment>;
}

export const getToken = () => localStorage.getItem("token");
export const getUser = () => JSON.parse(localStorage.getItem("user"));

// TODO: make a request to verify token in backend (not yet implemented)
export const isValidToken = (token) => !!token;
