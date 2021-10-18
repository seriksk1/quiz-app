import { combineReducers } from "redux";
import { IQuizState, IUserState } from "../interfaces";

import quiz from "./quiz";
import user from "./user";

export interface RootReducer {
  quiz: IQuizState;
  user: IUserState;
}

const rootReducer = combineReducers<RootReducer>({
  quiz,
  user,
});

export default rootReducer;
