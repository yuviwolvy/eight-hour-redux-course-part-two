import { combineReducers } from "redux";
import { pizzaReducer } from "./pizza/pizza-reducer";
import { burgerReducer } from "./burger/burger-reducer";
import productsReducer from "./products/products-reducers";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer,
  products: productsReducer,
});

export default rootReducer;
