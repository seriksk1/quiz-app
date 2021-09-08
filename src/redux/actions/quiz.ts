import { ACTION_QUIZ } from "../contants";
import { IQuestion, IQuiz } from "../interfaces";
import axios from "axios";

export const startQuiz = (quiz: IQuiz) => ({
  type: ACTION_QUIZ.START_QUIZ,
  payload: quiz,
});

export const setCurrentQuestion = (question: IQuestion) => ({
  type: ACTION_QUIZ.SET_QUESTION,
  payload: question,
});

export const setQuizes = (quizes: IQuiz[]) => ({
  type: ACTION_QUIZ.SET_QUIZES,
  payload: quizes,
});

export const fetchQuizes = () => async (dispatch: any) => {
  const { data } = await axios.get(
    "https://my-json-server.typicode.com/seriksk1/api-quiz-app/quizes"
  );
  console.log(data);
  dispatch(setQuizes(data));
};
