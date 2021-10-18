import { ACTION_QUIZ } from "../contants";
import { IQuizState } from "../interfaces";
import { AnyAction } from "../types";

const initialState: IQuizState = {
  quizzes: null,

  currentQuiz: null,
  currentQuestion: {
    index: 0,
    isAnswered: false,
  },
  userAnswers: [],

  quizToCreate: null,
  selectedCard: 0,
};

const quiz = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case ACTION_QUIZ.SET_QUIZZES: {
      return {
        ...state,
        quizzes: payload,
      };
    }

    case ACTION_QUIZ.START_QUIZ:
      return {
        ...state,
        currentQuiz: payload,
      };

    case ACTION_QUIZ.SET_CURRENT_QUIZ:
      return {
        ...state,
        currentQuiz: payload,
      };

    case ACTION_QUIZ.SET_NEXT_QUESTION: {
      return {
        ...state,
        currentQuestion: {
          ...state.currentQuestion,
          index: state?.currentQuestion?.index! + 1,
          isAnswered: false,
        },
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

    case ACTION_QUIZ.WRITE_ANSWER: {
      return {
        ...state,
        userAnswers: [...state.userAnswers, payload],
      };
    }

    case ACTION_QUIZ.CLEAR_QUIZ: {
      return {
        ...state,
        ...initialState,
      };
    }

    case ACTION_QUIZ.CREATE_QUIZ: {
      return {
        ...state,
        quizToCreate: payload,
      };
    }

    case ACTION_QUIZ.SET_SELECTED_CARD: {
      return {
        ...state,
        selectedCard: payload,
      };
    }

    default:
      return state;
  }
};

export default quiz;
