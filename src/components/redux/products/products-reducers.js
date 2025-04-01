import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./products-types";

const initialState = { loading: false, products: [], error: "" };

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
