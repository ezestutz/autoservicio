import { UPDATE_CART } from "../actions/types";

const initialState = {
  count: 0,
  totalPrice: 0,
  cart: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        count: action.payload.count,
        totalPrice: action.payload.totalPrice,
        cart: action.payload.cart,
      };
    default:
      return state;
  }
}
