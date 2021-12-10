import axios from "axios";
import { baseURL } from "../../constants";

export default async function login({ email, password }) {
  async function makeLogin() {
    const res = await axios
      .post(`${baseURL}/user/login`, {
        email,
        password,
      })
      .then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        window.location = "/";
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
    return res;
  }

  return makeLogin();
}
