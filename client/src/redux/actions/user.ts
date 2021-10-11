import axios from "axios";
import { ACTION_USER } from "../contants";

const API_URI = process.env.REACT_APP_URI;

const api = axios.create({
  baseURL: API_URI + "/auth",
});

export const register = () => async (dispatch: any) => {
  try {
    const { data } = await api.post("/register", {
      username: "seriksk1",
      email: "seriksk1@ukr.net",
      password: "Seriksk1",
    });

    console.log(data.token);
    localStorage.setItem("token", data.token);

    dispatch({
      type: ACTION_USER.REGISTERED,
    });
  } catch (err) {
    console.log(err);
  }
};

export const login = () => async (dispatch: any) => {
  try {
    const { data } = await api.post("/login", {
      username: "seriksk1",
      email: "seriksk1@ukr.net",
      password: "Seriksk1",
    });

    console.log(data.token);
    localStorage.setItem("token", data.token);
    dispatch({
      type: ACTION_USER.LOGGED_IN,
    });
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => (dispatch: any) => {
  localStorage.removeItem("token");
  dispatch({
    type: ACTION_USER.LOGGED_OUT,
  });
};
