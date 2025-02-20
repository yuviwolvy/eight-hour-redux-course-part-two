import { createStore } from "redux";
import { reducer } from "./pizza/pizza-reducer";

const store = createStore(reducer);

export default store;
