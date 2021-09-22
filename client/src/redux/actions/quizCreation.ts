import { ACTION_QUIZ } from "../contants";
import { ID } from "../types";
import axios from "axios";

const API_URI = process.env.API_URI;

const api = axios.create({
  baseURL: `http://localhost:3001/api`,
});

export const deleteQuestion = (data: any) => ({
  type: ACTION_QUIZ.DELETE_QUESTION,
  payload: data,
});

export const deleteAnswer = (data: any) => ({
  type: ACTION_QUIZ.DELETE_ANSWER,
  payload: data,
});

export const addQuestion = (data: any) => ({
  type: ACTION_QUIZ.ADD_QUESTION,
  payload: data,
});

export const addAnswer = (data: any) => ({
  type: ACTION_QUIZ.ADD_ANSWER,
  payload: data,
});

export const newQuestion = (id: ID) => async (dispatch: any) => {
  try {
    const body = { quizId: id };
    const { data } = await api.post("/question", body);
    const newQuestion = data.data;

    console.log("newQuestion:", newQuestion);
    dispatch(addQuestion(newQuestion));
  } catch (err) {
    console.log(err);
  }
};

export const newAnswer = (id: ID) => async (dispatch: any) => {
  try {
    const body = { questionId: id };
    const { data } = await api.post("/answer", body);
    const newAnswer = data.data;

    console.log("newAnswer:", newAnswer);
    dispatch(addAnswer(newAnswer));
  } catch (err) {
    console.log(err);
  }
};

export const setNewQuiz = (data: any) => ({
  type: ACTION_QUIZ.START_CREATE_QUIZ,
  payload: data,
});

export const setSelectedCard = (data: any) => ({
  type: ACTION_QUIZ.SET_SELECTED_CARD,
  payload: data,
});

export const startCreateQuiz = () => async (dispatch: any) => {
  try {
    const { data } = await api.post("/quiz");
    const newQuiz = data.data;
    console.log("newQuiz:", newQuiz);

    dispatch(setNewQuiz(newQuiz));
  } catch (err) {
    console.log(err);
  }
};
