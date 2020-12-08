import { ADD_PRODUCT } from "../actions/types";
import { REMOVE_PRODUCT } from "../actions/types";

const initialState = {
  count: 0,
  totalPrice: 0,
  cart: [],
};

export default function (state = initialState, action) {
  let newCart = state.cart;
  switch (action.type) {
    case ADD_PRODUCT:
      newCart.push(action.payload.product);
      return {
        ...state,
        count: state.count + 1,
        totalPrice: state.totalPrice + action.payload.price,
        cart: newCart,
      };
    case REMOVE_PRODUCT:
      const indexOfProduct = newCart.indexOf(action.payload.product);
      if (indexOfProduct > -1) {
        newCart.splice(indexOfProduct, 1);
      }
      return {
        ...state,
        count: state.count - 1,
        totalPrice: state.totalPrice - action.payload.price,
        cart: newCart,
      };
    default:
      return state;
  }
}
