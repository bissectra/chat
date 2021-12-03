import axios from "axios";
import { baseURL } from "../../constants";

export default function getConversations(token, setConversations) {
  axios
    .get(`${baseURL}/conversation`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      setConversations(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
