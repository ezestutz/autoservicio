import { ADD_PRODUCT } from "../actions/types";

const initialState = {
  count: 0,
  totalPrice: 0,
  cart: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      let newCart = state.cart;
      newCart.push(action.payload.product);
      return {
        ...state,
        count: state.count + 1,
        totalPrice: state.totalPrice + action.payload.price,
        cart: newCart,
      };
    default:
      return state;
  }
}
