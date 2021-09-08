import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import multi from "redux-multi";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, multi))
);

export default store;
