import { Text, Answer, ID } from "./types";

export interface IQuizState {
  quizzes: IQuiz[] | null;

  currentQuiz: IQuiz | null;
  currentQuestion: {
    isAnswered?: boolean;
    index?: number;
  };

  userAnswers: ID[];

  quizToCreate: IQuiz | null;
  selectedCard: ID;
}

export interface IUserState {
  avatar: string;

  answers: any[];
  result: number | null;
  isAuthorized: boolean;
}

export interface IQuiz {
  _id?: ID;
  name: string;
  owner: string;
  questions: IQuestion[];
  previewImage?: File;
}

export interface IQuestion {
  _id?: ID;
  text: Text;
  answers: Answer[];
}

export interface IAnswer {
  _id?: ID;
  text: Text;
  isRight?: boolean;
}
