import { Text, Answer } from "./types";

export interface IQuizState {
  quizToCreate: IQuiz | null;
  currentQuiz: IQuiz | null;
  currentQuestion: IQuestion | null;
  quizes: IQuiz[] | null;
  currentQuestionIndex: number;
}

export interface IUserState {
  answers: any[];
  result: number | null;
}

export interface IQuiz {
  _id: ID;
  name: string;
  questions: IQuestion[];
  numberOfQuestions?: number;
}

export interface IQuestion {
  id: ID;
  text: Text;
  answers: Answer[];
  rightAnswerId: ID;
  isAnswered?: boolean;
}

export interface IAnswer {
  id: ID;
  text: Text;
}
