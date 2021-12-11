import axios from "axios";
import { baseURL } from "../../constants";
import { getToken } from "../Private";

const saveMessage = (newmessage, conversationId) => {
  axios
    .put(
      `${baseURL}/conversation/${conversationId}`,
      { message: newmessage },
      {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      }
    )
    .then((res) => {
      if (res.status !== 201) console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};

export default saveMessage;
