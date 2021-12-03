import axios from "axios";

export default function getConversations(token, setConversations) {
  axios
    .get("http://localhost:3000/conversation", {
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
