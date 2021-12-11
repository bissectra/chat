import socketIOClient from "socket.io-client";
import { baseURL } from "../../constants";
import { getToken } from "../Private";

const emitSocket = (setConversation) => {
    const socket = socketIOClient(baseURL);
    const token = getToken()
    socket.emit("getmessages", token, (response) => {
        setConversation(response.conversations)
    });
}

export default emitSocket