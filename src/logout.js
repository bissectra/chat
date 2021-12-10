const logout = () => {
  localStorage.setItem("token", "");
  localStorage.setItem("user", "");
  window.location = "/login";
};

export default logout;
