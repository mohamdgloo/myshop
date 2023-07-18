import { FETCH_BASKET_FAIL, FETCH_BASKET_REQUEST, FETCH_BASKET_SUCCESS, ADD_TO_BASKET_SUCCESS } from "../constants/basketConstant";

export const basketReducer = (state = { basketItems: [] }, action) => {
  switch (action.type) {
    case FETCH_BASKET_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_BASKET_SUCCESS:
      return { ...state, loading: false, basketItems: action.payload };
    case FETCH_BASKET_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADD_TO_BASKET_SUCCESS:
      const updatedBasketItems = state.basketItems.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        }
        return item;
      });
      return { ...state, basketItems: updatedBasketItems };
    default:
      return state;
  }
};
