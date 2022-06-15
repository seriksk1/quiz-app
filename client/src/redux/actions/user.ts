import axios from "axios";
import { ACTION_USER, API_URI, HTTP_STATUS, TOAST_OPTION } from "../contants";
import { IUser } from "../interfaces";
import { showNotification } from "./notification";

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

      dispatch([
        setUser(data.user),
        registerSuccess(),
        showNotification(TOAST_OPTION.USER.REGISTER_SUCCESS),
      ]);
    } catch (err) {
      showNotification(TOAST_OPTION.USER.REGISTER_ERROR);
      console.log(err);
    }
  };

export const login = (credentials: ICredentials) => async (dispatch: any) => {
  try {
    const { data } = await api.post("/login", credentials);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    dispatch([
      setUser(data.user),
      loginSuccess(),
      showNotification(TOAST_OPTION.USER.LOGIN_SUCCESS),
    ]);
  } catch (err: any) {
    const status = err?.response?.data?.statusCode;

    if (status === HTTP_STATUS.BAD_REQUEST) {
      dispatch(showNotification(TOAST_OPTION.USER.LOGIN_WRONG_PASSWORD));
    } else if (status === HTTP_STATUS.NOT_FOUND) {
      dispatch(showNotification(TOAST_OPTION.USER.LOGIN_NOT_FOUND));
    }
    console.log(err);
  }
};

export const logout = () => (dispatch: any) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  dispatch([logoutSuccess(), showNotification(TOAST_OPTION.USER.LOGOUT)]);
};
