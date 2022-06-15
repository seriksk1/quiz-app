import { combineReducers } from "redux";
import { INotificationState, IQuizState, IUserState } from "../interfaces";

import quiz from "./quiz";
import user from "./user";
import notifications from "./notifications";

export interface RootReducer {
  quiz: IQuizState;
  user: IUserState;
  notifications: INotificationState;
}

const rootReducer = combineReducers<RootReducer>({
  quiz,
  user,
  notifications,
});

export default rootReducer;
