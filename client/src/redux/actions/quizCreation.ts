import axios from "axios";

import { ACTION_QUIZ } from "../contants";
import { IQuiz } from "../interfaces";
import { ID } from "../types";

const API_URI = process.env.REACT_APP_URI;

const api = axios.create({
  baseURL: API_URI + "/api",
});

api.interceptors.request.use((req) => {
  req.headers["x-access-token"] = localStorage.getItem("token");
  return req;
});

export const setNewQuiz = (data: any) => ({
  type: ACTION_QUIZ.CREATE_QUIZ,
  payload: data,
});

export const setSelectedCard = (data: any) => ({
  type: ACTION_QUIZ.SET_SELECTED_CARD,
  payload: data,
});

export const newQuestion = (id: ID) => async (dispatch: any) => {
  try {
    const { data } = await api.post("/question", { quizId: id });
    const newQuestion = data.data;

    dispatch(addQuestion(newQuestion));
  } catch (err) {
    console.log(err);
  }
};

export const addQuestion = (data: any) => ({
  type: ACTION_QUIZ.ADD_QUESTION,
  payload: data,
});

export const updateQuestion = (id: any) => async (dispatch: any) => {
  try {
    // await api.patch(`/question/${id}`);
    dispatch({
      type: ACTION_QUIZ.UPDATE_QUESTION,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteQuestion = (id: any) => async (dispatch: any) => {
  try {
    await api.delete(`/question/${id}`);

    dispatch({
      type: ACTION_QUIZ.DELETE_QUESTION,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const newAnswer = (id: ID) => async (dispatch: any) => {
  try {
    const { data } = await api.post("/answer", { questionId: id });
    const newAnswer = data.data;

    dispatch(addAnswer(newAnswer));
  } catch (err) {
    console.log(err);
  }
};

export const addAnswer = (data: any) => ({
  type: ACTION_QUIZ.ADD_ANSWER,
  payload: data,
});

export const updateAnswer = (id: any) => async (dispatch: any) => {
  try {
    // await api.patch(`/answer/${id}`);
    dispatch({
      type: ACTION_QUIZ.UPDATE_ANSWER,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAnswer = (id: any) => async (dispatch: any) => {
  try {
    await api.delete(`/answer/${id}`);

    dispatch({
      type: ACTION_QUIZ.DELETE_ANSWER,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createQuiz = async (data: IQuiz) => {
  try {
    await api.post("/quiz", data);
  } catch (err) {
    console.log(err);
  }
};
