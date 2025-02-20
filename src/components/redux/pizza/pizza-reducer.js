import { ORDER_PIZZA } from "./pizza-type";

const initialState = {
  pizzaBase: 1000,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };
    default:
      return state;
  }
};
