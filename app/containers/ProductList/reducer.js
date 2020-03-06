/*
 *
 * ProductList reducer
 *
 */
import produce from 'immer';
import { LOAD_PRODUCT_LIST, LOAD_PRODUCT_LIST_ERROR, LOAD_PRODUCT_LIST_SUCCESS, ADD_TO_CART } from './constants';

export const initialState = {
  items: [],
  loading: false,
  error: true,
};

/* eslint-disable default-case, no-param-reassign */
const productListReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {

    switch (action.type) {
      case LOAD_PRODUCT_LIST:
        return {
          ...state,
          loading: true
        }
      case LOAD_PRODUCT_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.products
        };
      case LOAD_PRODUCT_LIST_ERROR:
        return {
          ...state,
          error: action.error
        }
      
      default:
        return state;
    }
  });

export default productListReducer;
