import { UPDATE_CART } from "./types";

export const updateCart = (cart, count, totalPrice) => (dispatch) => {
  dispatch({
    type: UPDATE_CART,
    payload: { cart, count, totalPrice },
  });
};
