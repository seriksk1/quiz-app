import { combineReducers } from "redux";
import quiz from "./quiz";

export interface RootReducer {
  quiz: any;
}

const rootReducer = combineReducers<RootReducer>({
  quiz,
});

export default rootReducer;
