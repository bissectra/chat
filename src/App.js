import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp/index.jsx";

export default function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const [user, setUser] = useState({});
  const setToken = (token) => setCookie("token", token, { path: "/" });
  const isLogged = !!cookies.token;
  const logout = () => {
    setUser({});
    removeCookie("token");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main isLogged={isLogged} user={user} logout={logout} />}
        />
        <Route
          path="/login"
          element={
            <Login isLogged={isLogged} setToken={setToken} setUser={setUser} />
          }
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
