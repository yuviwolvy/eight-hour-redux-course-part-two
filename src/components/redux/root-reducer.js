import { combineReducers } from "redux";
import { pizzaReducer } from "./pizza/pizza-reducer";
import { burgerReducer } from "./burger/burger-reducer";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer,
});

export default rootReducer;
