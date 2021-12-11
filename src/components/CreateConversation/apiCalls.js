import axios from "axios";
import { baseURL } from "../../constants";
import { getToken } from "../Private";

export const getUsernamesAsync = (setter) => {
  axios
    .get(baseURL + "/findallusernames")
    .then((res) => {
      let data = res.data;
      data.sort((a, b) => (a.username > b.username ? 1 : -1));
      data = data.map((user) => ({ ...user, selected: false }));
      setter(data);
    })
    .catch((err) => console.log(err));
};

export const getUserDataAsync = (setter) => {
  axios
    .get(baseURL + "/user", {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    })
    .then((res) => setter(res.data))
    .catch((err) => console.log(err));
};

export const createConvesation = (userIds, name) => {
  axios
    .post(
      baseURL + "/conversation",
      {
        users: userIds,
        name,
      },
      {
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      }
    )
    .then((res) => {
      window.location = "/";
    })
    .catch((err) => console.log(err));
};
