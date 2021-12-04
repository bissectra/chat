import axios from "axios";
import { baseURL } from "../../constants";
import { getToken } from "../Private";

export default function getConversations(setConversations) {
  axios
    .get(`${baseURL}/conversation`, {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    })
    .then((response) => {
      setConversations(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
