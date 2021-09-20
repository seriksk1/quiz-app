import { ACTION_QUIZ } from "../contants";
import { IQuizState } from "../interfaces";
import { AnyAction } from "../types";

const initialState: IQuizState = {
  quizToCreate: null,
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

    case ACTION_QUIZ.CREATE_NEW_QUIZ: {
      return {
        ...state,
        quizToCreate: {},
      };
    }

    case ACTION_QUIZ.NEW_QUESTION: {
      return {
        ...state,
        quizToCreate: {
          ...state.quizToCreate,
          questions: [...state.quizToCreate?.questions!, 1],
        },
      };
    }

    case ACTION_QUIZ.NEW_ANSWER: {
      return {
        ...state,
        quizToCreate: {
          ...state.quizToCreate,
        },
      };
    }

    default:
      return state;
  }
};

export default quiz;
