import axios from "axios";
import { baseURL } from "../../constants";

export default function signUp({ username, email, password }) {
  axios
    .post(`${baseURL}/user`, {
      username: username,
      email: email,
      password: password,
    })
    .then((response) => {
      console.log("redirect to login", response);
    })
    .catch((error) => {
      console.log(error);
    });
}
