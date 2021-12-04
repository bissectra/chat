import axios from "axios";
import { baseURL, mockEmailDomain } from "../../constants";

export default function signUp({ password, username, togglePage }) {
  axios
    .post(`${baseURL}/user`, {
      username,
      email: `${username}@${mockEmailDomain}`,
      password,
    })
    .then((response) => {
      togglePage();
    })
    .catch((error) => {
      console.log(error);
    });
}
