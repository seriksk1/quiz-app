import axios from "axios";
import { setAvatar } from "./user";

const API_URI = process.env.REACT_APP_URI;

const api = axios.create({
  baseURL: API_URI + "/api",
});

api.interceptors.request.use((req) => {
  req.headers["x-access-token"] = localStorage.getItem("token");
  return req;
});

export const uploadFile = (formdata: FormData) => async (dispatch: any) => {
  try {
    console.log("Upload file to server");
    const { data } = await api.post("/upload", formdata);
    const avatarUrl = `${API_URI}/${data.data.name}`;

    dispatch(setAvatar(avatarUrl));
  } catch (err) {
    console.log("Upload error");
  }
};
