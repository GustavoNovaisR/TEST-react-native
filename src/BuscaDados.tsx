import axios from "axios";
import store from "../src/Store";

export const BuscaDados = () => {
  const state = store.getState();
  const { token } = state;

  return axios({
    url: "https://teste.com/api",
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
