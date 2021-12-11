import { Fragment } from "react";

export default function Private({ children: element }) {
  const token = getToken();
  const isLogged = isValidToken(token);

  if (!isLogged) window.location = "/login";

  return <Fragment>{element}</Fragment>;
}

export const getToken = () => {
  const token = localStorage.getItem("token");
  return token || "";
};
export const getUsername = () => {
  const username = localStorage.getItem("username");
  return username || "";
};
export const getId = () => {
  const _id = localStorage.getItem("_id");
  return _id || "";
};

// TODO: make a request to verify token in backend (not yet implemented)
export const isValidToken = (token) => !!token;
