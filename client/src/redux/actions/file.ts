import axios from "axios";
import { API_URI } from "../contants";
import { setAvatar } from "./user";

const api = axios.create({
  baseURL: API_URI + "/auth",
});

api.interceptors.request.use((req) => {
  req.headers["x-access-token"] = localStorage.getItem("token");
  return req;
});

export const uploadFile =
  (formdata: FormData, username: string) => async (dispatch: any) => {
    try {
      console.log("Uploading file to server", formdata);

      const { data } = await api.put(`/upload-avatar/${username}`, formdata);
      const avatarUrl = data.file;
      localStorage.setItem("avatar", data.file);

      dispatch(setAvatar(avatarUrl));
    } catch (err) {
      console.log("Upload error");
    }
  };
