import axios from "axios";
import { baseURL } from "../../constants";

export default function signUp({ email, password, username }) {
  axios
    .post(`${baseURL}/user`, {
      username,
      email,
      password,
    })
    .then((response) => {
      window.location = "/login";
    })
    .catch((error) => {
      console.log(error);
    });
}
