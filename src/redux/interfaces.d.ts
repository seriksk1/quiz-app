import { Text, Answer } from "./types";

export interface IQuiz {
  id: ID;
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
