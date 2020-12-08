import { ADD_PRODUCT } from "./types";
import { REMOVE_PRODUCT } from "./types";

export const addProduct = (product, price) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: { product, price },
  });
};

export const removeProduct = (product, price) => (dispatch) => {
  dispatch({
    type: REMOVE_PRODUCT,
    payload: { product, price },
  });
};
