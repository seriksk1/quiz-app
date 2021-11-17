import { Text, Answer, ID, Profile } from "./types";

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
  currentUser: IUser;
  answers: any[];
  result: number | null;
  isAuthorized: boolean;
  profile: IUser;
}

export interface IQuiz {
  _id?: ID;
  name: string;
  owner: string;
  questions: IQuestion[];
  image?: File;
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

export interface IUser {
  email: string;
  username: string;
  avatar: string;
}
