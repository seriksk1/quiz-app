import { ACTION_QUIZ } from "../contants";
import { IQuizState } from "../interfaces";
import { AnyAction } from "../types";

const initialState: IQuizState = {
  currentQuestion: null,
  currentQuiz: null,
  quizes: null,
  currentQuestionIndex: 0,
};

const quiz = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case ACTION_QUIZ.SET_QUIZES: {
      return {
        ...state,
        quizes: payload,
      };
    }

    case ACTION_QUIZ.START_QUIZ:
      return {
        ...state,
        currentQuiz: payload,
        currentQuestion: payload.questions[0],
      };

    case ACTION_QUIZ.SET_NEXT_QUESTION: {
      const prevIndex = state.currentQuestionIndex;
      const nextIndex = prevIndex + 1;
      return {
        ...state,
        currentQuestion: state.currentQuiz?.questions[nextIndex],
        currentQuestionIndex: nextIndex,
      };
    }

    case ACTION_QUIZ.SET_IS_ANSWERED: {
      return {
        ...state,
        currentQuestion: {
          ...state.currentQuestion,
          isAnswered: true,
        },
      };
    }

    case ACTION_QUIZ.CLEAR_QUIZ: {
      return {
        ...state,
        ...initialState,
      };
    }

    default:
      return state;
  }
};

export default quiz;
