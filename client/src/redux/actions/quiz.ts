import { ACTION_QUIZ } from "../contants";
import { IQuiz } from "../interfaces";
import axios from "axios";

const API_URI = process.env.API_URI;

const api = axios.create({
  baseURL: `http://localhost:3001/api`,
});

export const startQuiz = (quiz: IQuiz) => ({
  type: ACTION_QUIZ.START_QUIZ,
  payload: quiz,
});

export const setNextQuestion = () => ({
  type: ACTION_QUIZ.SET_NEXT_QUESTION,
});

export const setQuizes = (quizes: IQuiz[]) => ({
  type: ACTION_QUIZ.SET_QUIZES,
  payload: quizes,
});

export const setIsAnswered = (isAnswered: boolean) => ({
  type: ACTION_QUIZ.SET_IS_ANSWERED,
  payload: isAnswered,
});

export const clearQuiz = () => ({
  type: ACTION_QUIZ.CLEAR_QUIZ,
});

export const fetchQuizes = () => async (dispatch: any) => {
  try {
    const { data } = await api.get(`/quizzes`);
    const items = data.data;

    dispatch(setQuizes(items));
  } catch (err) {
    console.log(err);
  }
};
