import axios from "axios";
import { baseURL } from "../../constants";

export default function getConversations(token, setter) {
  axios
    .get(`${baseURL}/conversation`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log(response.data);
      setter(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
