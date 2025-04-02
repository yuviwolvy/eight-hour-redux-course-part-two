import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
