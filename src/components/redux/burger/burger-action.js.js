import { ORDER_BURGER } from "./burger-type";

export function orderBurger(userChoice = 1) {
  return {
    type: ORDER_BURGER,
    payload: userChoice,
  };
}
