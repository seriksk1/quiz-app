import { ACTION_QUIZ } from "../contants";
import { IQuiz } from "../interfaces";
import axios from "axios";

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

export const setIsAnswered = () => ({
  type: ACTION_QUIZ.SET_IS_ANSWERED,
});

export const clearQuiz = () => ({
  type: ACTION_QUIZ.CLEAR_QUIZ,
});

export const fetchQuizes = () => async (dispatch: any) => {
  const { data } = await axios.get(
    "https://my-json-server.typicode.com/seriksk1/api-quiz-app/quizes"
  );

  dispatch(setQuizes(data));
};
