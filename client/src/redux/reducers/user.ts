import { ACTION_USER } from "../contants";
import { AnyAction } from "../types";

const initialState = {
  answers: [],
  result: null,
};

export interface IUserState {
  answers: [] | undefined;
  result: number | null;
}

const user = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case ACTION_USER.SET_USER:
      return {
        ...state,
        ...payload,
      };

    case ACTION_USER.ADD_ANSWER:
      return {
        ...state,
        answers: [...state.answers, payload],
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

    default:
      return state;
  }
};

export default user;
