import axios from "axios";
import { baseURL, mockEmailDomain } from "../../constants";

export default function signUp({ password, username }) {
  axios
    .post(`${baseURL}/user`, {
      username,
      email: `${username}@${mockEmailDomain}`,
      password,
    })
    .then((response) => {
      window.location = "/login";
    })
    .catch((error) => {
      console.log(error);
    });
}
