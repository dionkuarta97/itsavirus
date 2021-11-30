import { SET_LOADING, SET_PRODUCTS } from "./actionTypes";

const initialState = {
  loading: false,
  products: [],
};

function reducer(state = initialState, action) {
  if (action.type === SET_LOADING) {
    return { ...state, loading: action.payload };
  } else if (action.type === SET_PRODUCTS) {
    return { ...state, products: action.payload };
  }
  return state;
}

export default reducer;
