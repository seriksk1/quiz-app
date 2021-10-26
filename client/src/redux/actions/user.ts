import axios from "axios";
import { ACTION_USER } from "../contants";

const API_URI = process.env.REACT_APP_URI;

const api = axios.create({
  baseURL: API_URI + "/auth",
});

interface ICredentials {
  email: string;
  password: string;
  username: string;
}

export const register =
  (credentials: ICredentials) => async (dispatch: any) => {
    try {
      const { data } = await api.post("/register", credentials);

      localStorage.setItem("token", data.token);
      localStorage.setItem("avatar", data.image);
      localStorage.setItem("username", credentials.username);

      dispatch({
        type: ACTION_USER.REGISTERED,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const login = (credentials: ICredentials) => async (dispatch: any) => {
  try {
    const { data } = await api.post("/login", credentials);

    localStorage.setItem("token", data.token);
    localStorage.setItem("avatar", data.image);
    localStorage.setItem("username", credentials.username);

    dispatch({
      type: ACTION_USER.LOGGED_IN,
    });
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => (dispatch: any) => {
  localStorage.removeItem("token");
  localStorage.removeItem("avatar");
  localStorage.removeItem("username");

  dispatch({
    type: ACTION_USER.LOGGED_OUT,
  });
};

export const setAvatar = (avatar: string) => ({
  type: ACTION_USER.SET_AVATAR,
  payload: avatar,
});
