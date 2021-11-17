import axios from "axios";
import { ACTION_USER, API_URI } from "../contants";
import { IUser } from "../interfaces";

const api = axios.create({
  baseURL: API_URI + "/auth",
});

interface ICredentials {
  email: string;
  password: string;
  username: string;
}

export const setUser = (user: IUser) => ({
  type: ACTION_USER.SET_USER,
  payload: user,
});

export const setAvatar = (avatar: string) => ({
  type: ACTION_USER.SET_AVATAR,
  payload: avatar,
});

export const setUserProfile = (user: IUser) => ({
  type: ACTION_USER.SET_USER_PROFILE,
  payload: user,
});

const registerSuccess = () => ({
  type: ACTION_USER.REGISTERED,
});

const loginSuccess = () => ({
  type: ACTION_USER.LOGGED_IN,
});

const logoutSuccess = () => ({
  type: ACTION_USER.LOGGED_OUT,
});

export const register =
  (credentials: ICredentials) => async (dispatch: any) => {
    try {
      const { data } = await api.post("/register", credentials);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      dispatch([setUser(data.user), registerSuccess()]);
    } catch (err) {
      console.log(err);
    }
  };

export const login = (credentials: ICredentials) => async (dispatch: any) => {
  try {
    const { data } = await api.post("/login", credentials);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    dispatch([setUser(data.user), loginSuccess()]);
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => (dispatch: any) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  dispatch(logoutSuccess());
};
