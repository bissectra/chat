import axios from "axios";
import { baseURL } from "../../constants";

export default function login({ email, password, setToken, setUser }) {
  axios
    .post(`${baseURL}/user/login`, { email, password })
    .then((response) => {
      if (response.status !== 200) {
        console.log(response);
        return;
      }
      const { token, user } = response.data;
      setToken(token);
      setUser(user);
    })
    .catch((error) => console.log(error));
}
