import { ACTION_QUIZ } from "../contants";
import { IQuizState } from "../interfaces";
import { AnyAction } from "../types";

const initialState: IQuizState = {
  quizes: null,
  currentQuiz: null,
  currentQuestion: null,
  currentQuestionIndex: 0,

  quizToCreate: null,
  selectedCard: null,
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

    case ACTION_QUIZ.CREATE_QUIZ: {
      return {
        ...state,
        quizToCreate: payload,
      };
    }

    case ACTION_QUIZ.ADD_QUESTION: {
      //need to rework
      const oldItems = state.quizToCreate?.questions!;

      return {
        ...state,
        quizToCreate: {
          ...state.quizToCreate,
          questions: [...oldItems, payload],
        },
      };
    }

    case ACTION_QUIZ.ADD_ANSWER: {
      //need to rework
      const oldItems = [...state.quizToCreate?.questions!];
      const currentQuestion = oldItems.find((item) => {
        return item._id === payload.questionId;
      });

      const newItems = oldItems.filter(
        (item) => item._id !== payload.questionId
      );

      const updatedQuestion = {
        ...currentQuestion,
        answers: [...currentQuestion?.answers!, payload],
      };

      return {
        ...state,
        quizToCreate: {
          ...state.quizToCreate,
          questions: [...newItems, updatedQuestion],
        },
      };
    }

    case ACTION_QUIZ.UPDATE_QUESTION: {
      return {
        ...state,
      };
    }

    case ACTION_QUIZ.UPDATE_ANSWER: {
      return {
        ...state,
      };
    }

    case ACTION_QUIZ.DELETE_QUESTION: {
      //need to rework
      const oldItems = state.quizToCreate?.questions!;

      const newItems = oldItems.filter((item) => item._id !== payload);

      return {
        ...state,
        quizToCreate: {
          ...state.quizToCreate,
          questions: newItems,
        },
      };
    }

    case ACTION_QUIZ.DELETE_ANSWER: {
      //need to rework
      const oldItems = [...state.quizToCreate?.questions!];

      const currentQuestion = oldItems.find((item) => {
        return item._id === state.selectedCard;
      });

      const newItems = oldItems.filter(
        (item) => item._id !== state.selectedCard
      );

      const newAnswers = currentQuestion?.answers.filter(
        (item) => item._id !== payload
      );

      const updatedQuestion = {
        ...currentQuestion,
        answers: newAnswers,
      };

      return {
        ...state,
        quizToCreate: {
          ...state.quizToCreate,
          questions: [...newItems, updatedQuestion],
        },
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
