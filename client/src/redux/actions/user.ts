import { ACTION_USER } from "../contants";

export const register = () => (dispatch: any) => {
  localStorage.setItem("token", "some token");
  dispatch({
    type: ACTION_USER.REGISTERED,
  });
};

export const login = () => (dispatch: any) => {
  localStorage.setItem("token", "some token");
  dispatch({
    type: ACTION_USER.LOGGED_IN,
  });
};

export const logout = () => (dispatch: any) => {
  localStorage.removeItem("token");
  dispatch({
    type: ACTION_USER.LOGGED_OUT,
  });
};

export const addAnswer = (answer: any) => ({
  type: ACTION_USER.ADD_ANSWER,
  payload: answer,
});

export const setResults = (result: number) => ({
  type: ACTION_USER.SET_RESULTS,
  payload: result,
});

export const clearAnswers = () => ({
  type: ACTION_USER.CLEAR_ANSWERS,
});
