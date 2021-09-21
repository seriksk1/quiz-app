import { ACTION_QUIZ } from "../contants";

export const newQuestion = (data: any) => ({
  type: ACTION_QUIZ.NEW_QUESTION,
});

export const newAnswer = (data: any) => ({
  type: ACTION_QUIZ.NEW_ANSWER,
});

export const addQuestion = (data: any) => ({
  type: ACTION_QUIZ.ADD_QUESTION,
  payload: data,
});

export const addAnswer = (data: any) => ({
  type: ACTION_QUIZ.ADD_ANSWER,
  payload: data,
});

export const deleteQuestion = (data: any) => ({
  type: ACTION_QUIZ.DELETE_QUESTION,
  payload: data,
});

export const deleteAnswer = (data: any) => ({
  type: ACTION_QUIZ.DELETE_ANSWER,
  payload: data,
});

export const setSelectedCard = (data: any) => ({
  type: ACTION_QUIZ.SET_SELECTED_CARD,
  payload: data,
});

export const startCreateQuiz = () => ({
  type: ACTION_QUIZ.START_CREATE_QUIZ,
});
