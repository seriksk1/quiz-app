import axios from "axios";
import { ACTION_QUIZ, API_URI } from "../contants";
import { IQuiz } from "../interfaces";
import { logout, setUserProfile } from "./user";

const api = axios.create({
  baseURL: API_URI + "/api",
});

api.interceptors.request.use((req) => {
  req.headers["x-access-token"] = localStorage.getItem("token");
  return req;
});

export const setQuizzes = (quizzes: IQuiz[]) => ({
  type: ACTION_QUIZ.SET_QUIZZES,
  payload: quizzes,
});

export const setCurrentQuiz = (quiz: IQuiz) => ({
  type: ACTION_QUIZ.SET_CURRENT_QUIZ,
  payload: quiz,
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

export const fetchQuizzes = () => async (dispatch: any) => {
  try {
    const { data } = await api.get(`/quizzes`);
    const items = data.data;

    dispatch(setQuizzes(items));
  } catch (err) {
    dispatch(logout());
    console.log(err);
  }
};

export const fetchUserQuizzes = (owner: string) => async (dispatch: any) => {
  try {
    const { data } = await api.get(`/quizzes/${owner}`);
    const items = data.data;
    const user = data.user;

    dispatch(setUserProfile(user));
    dispatch(setQuizzes(items));
  } catch (err) {
    dispatch(logout());
    console.log(err);
  }
};
