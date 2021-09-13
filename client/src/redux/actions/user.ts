import { ACTION_USER } from "../contants";

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
