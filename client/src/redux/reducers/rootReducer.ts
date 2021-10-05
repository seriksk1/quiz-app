import { combineReducers } from "redux";

import quiz from "./quiz";
import user from "./user";

export interface RootReducer {
  quiz: any;
  user: any;
}

const rootReducer = combineReducers<RootReducer>({
  quiz,
  user,
});

export default rootReducer;
