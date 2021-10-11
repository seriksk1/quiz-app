import { ACTION_QUIZ } from "../contants";
import { IQuiz } from "../interfaces";
import axios from "axios";

const API_URI = process.env.REACT_APP_URI;

const api = axios.create({
  baseURL: API_URI + "/api",
});

api.interceptors.request.use((req) => {
  req.headers["x-access-token"] = localStorage.getItem("token");
  return req;
});

export const setQuizes = (quizes: IQuiz[]) => ({
  type: ACTION_QUIZ.SET_QUIZES,
  payload: quizes,
});

export const startQuiz = (quiz: IQuiz) => ({
  type: ACTION_QUIZ.START_QUIZ,
  payload: quiz,
});

export const setIsAnswered = (isAnswered: boolean) => ({
  type: ACTION_QUIZ.SET_IS_ANSWERED,
  payload: isAnswered,
});

export const writeAnswer = (answer: any) => ({
  type: ACTION_QUIZ.WRITE_ANSWER,
  payload: answer,
});

export const setNextQuestion = () => ({
  type: ACTION_QUIZ.SET_NEXT_QUESTION,
});

export const clearQuiz = () => ({
  type: ACTION_QUIZ.CLEAR_QUIZ,
});

export const fetchQuizes = () => async (dispatch: any) => {
  try {
    const { data } = await api.get(`/quizzes`);
    const items = data.data;
    console.log(items);

    dispatch(setQuizes(items));
  } catch (err) {
    console.log(err);
  }
};
