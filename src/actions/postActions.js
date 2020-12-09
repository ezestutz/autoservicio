import { ADD_PRODUCT } from "./types";

export const addProduct = (product, price) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: { product, price },
  });
};
