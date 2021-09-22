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

    case ACTION_QUIZ.START_CREATE_QUIZ: {
      return {
        ...state,
        quizToCreate: payload,
      };
    }

    case ACTION_QUIZ.ADD_QUESTION: {
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
      const oldItems = [...state.quizToCreate?.questions!];

      console.log("oldItems:", oldItems);
      console.log("adding answer:", payload);

      // const currentQuestion = oldItems.find((item) => {
      //   return item._id === payload.questionId;
      // });

      // console.log("currentQuestion:", currentQuestion);

      return {
        ...state,
        quizToCreate: {
          ...state.quizToCreate,
          // questions: [...newItems, updatedQuestion],
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
