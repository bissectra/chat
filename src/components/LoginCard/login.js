import axios from "axios";
import { baseURL, mockEmailDomain } from "../../constants";

export default function login({ username, password }) {
  axios
    .post(`${baseURL}/user/login`, {
      email: `${username}@${mockEmailDomain}`,
      password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      console.log('aoi');
      window.location = "/";
    })
    .catch((error) => {
      console.log(error);
    });
}
