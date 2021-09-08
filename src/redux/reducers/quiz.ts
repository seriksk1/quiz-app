import { ACTION_QUIZ } from "../contants";
import { IQuestion, IQuiz } from "../interfaces";
import { AnyAction } from "../types";

const initialState: IQuizState = {
  currentQuiz: null,
  currentQuestion: null,
  quizes: null,
};

export interface IQuizState {
  currentQuiz: IQuiz | null;
  currentQuestion: IQuestion | null;
  quizes: IQuiz[] | null;
}

const quiz = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case ACTION_QUIZ.START_QUIZ:
      return {
        ...state,
        currentQuiz: payload,
      };

    case ACTION_QUIZ.SET_QUESTION: {
      return {
        ...state,
        currentQuestion: payload,
      };
    }

    case ACTION_QUIZ.SET_QUIZES: {
      return {
        ...state,
        quizes: payload,
      };
    }

    default:
      return state;
  }
};

export default quiz;
