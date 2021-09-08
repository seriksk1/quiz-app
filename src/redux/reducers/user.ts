import { ACTION_USER } from "../contants";
import { AnyAction } from "../types";

const initialState = {};

const user = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case ACTION_USER.SET_USER:
      return { ...state, ...payload };

    case ACTION_USER.ADD_ANSWER:
      return { ...state, ...payload };

    case ACTION_USER.FINISH_QUIZ:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default user;
