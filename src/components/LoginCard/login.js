import axios from "axios";
import { baseURL } from "../../constants";

export default function login({ email, password }) {
  axios
    .post(`${baseURL}/user/login`, {
      email,
      password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      window.location = "/";
    })
    .catch((error) => {
      console.log(error);
    });
}
