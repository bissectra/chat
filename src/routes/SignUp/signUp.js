import axios from "axios";
import { baseURL } from "../../constants";

export default function signUp({ username, email, password }, callback) {
  axios
    .post(`${baseURL}/user`, { username, email, password })
    .then((response) => {
      if (response.status !== 201) {
        console.log(response);
        return;
      }
      callback();
    })
    .catch((error) => console.log(error));
}
