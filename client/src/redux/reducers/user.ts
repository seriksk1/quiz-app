import { ACTION_USER } from "../contants";
import { AnyAction } from "../types";
import { IUserState } from "../interfaces";

const API_URI = process.env.REACT_APP_URI;

const initialState: IUserState = {
  avatar: localStorage.getItem("avatar")
    ? `${API_URI}/${localStorage.getItem("avatar")}`
    : "https://html5css.ru/howto/img_avatar.png",
  answers: [],
  result: null,
  isAuthorized: localStorage.getItem("token") ? true : false,
};

const user = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case ACTION_USER.LOGGED_IN: {
      return {
        ...state,
        isAuthorized: true,
      };
    }

    case ACTION_USER.REGISTERED: {
      return {
        ...state,
        isAuthorized: true,
      };
    }

    case ACTION_USER.LOGGED_OUT: {
      return {
        ...state,
        isAuthorized: false,
      };
    }

    case ACTION_USER.SET_AVATAR: {
      return {
        ...state,
        avatar: payload,
      };
    }

    case ACTION_USER.SET_USER:
      return {
        ...state,
        ...payload,
      };

    case ACTION_USER.CLEAR_ANSWERS:
      return {
        ...state,
        ...initialState,
      };

    case ACTION_USER.SET_RESULTS: {
      return {
        ...state,
        result: payload,
      };
    }

    case ACTION_USER.ADD_ANSWER: {
      return {
        ...state,
        result: payload,
      };
    }

    default:
      return state;
  }
};

export default user;
