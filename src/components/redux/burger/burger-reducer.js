import { ORDER_BURGER } from "./burger-type";

const initialState = { burgerBuns: 200 };

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_BURGER:
      return {
        ...state,
        burgerBuns: state.burgerBuns - action.payload,
      };
    default:
      return state;
  }
};
