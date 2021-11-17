import { ACTION_USER } from "../contants";
import { AnyAction } from "../types";
import { IUserState } from "../interfaces";

const initialUser = {
  username: "",
  avatar: "",
  email: "",
};

const initialState: IUserState = {
  currentUser:
    JSON.parse(localStorage.getItem("user") || "null") || initialUser,
  answers: [],
  result: null,
  isAuthorized: localStorage.getItem("token") ? true : false,
  profile: {
    username: "",
    avatar: "",
    email: "",
  },
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
        currentUser: { ...state.currentUser, avatar: payload },
      };
    }

    case ACTION_USER.SET_USER:
      return {
        ...state,
        currentUser: payload,
      };

    case ACTION_USER.SET_USER_PROFILE:
      return {
        ...state,
        profile: payload,
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
