/*
 *
 * Cart reducer
 *
 */
import produce from 'immer';
import update from 'react-addons-update';
import { LOAD_CART_LIST, LOAD_CART_LIST_SUCCESS, LOAD_CART_LIST_ERROR, ADD_TO_CART, DELETE_CART_ITEM, INCREMENT_ITEM_QUANTITY, DECREMENT_ITEM_QUANTITY } from './constants';

export const initialState = {
  items: [],
  loading: false,
  error: true,
  total: 0
};


/* eslint-disable default-case, no-param-reassign */
const cartReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_CART_LIST:
        return {
          ...state,
        }
      case LOAD_CART_LIST_SUCCESS:
        return {
          ...state
        }

      case ADD_TO_CART:
        let existed_item = state.items.find(item => action.payload.product.id === item.id)
        if (existed_item) {
          action.payload.product.quantity += 1
          return {
            ...state,
            items: [...state.items],
            total: state.total + action.payload.product.price
          }
        }
        else {
          action.payload.product.quantity = 1;
          let newTotal = state.total + action.payload.product.price

          return {
            ...state,
            items: [...state.items, action.payload.product],
            total: newTotal
          }
        }

      case INCREMENT_ITEM_QUANTITY:
        let incrementingItem = state.items.find(item => action.payload.item.id === item.id);

        incrementingItem.quantity += 1;
        return {
          ...state,
          items: [...state.items]
        }

      case DECREMENT_ITEM_QUANTITY:
        let decrementingItem = state.items.find(item => action.payload.item.id === item.id);
        if (decrementingItem.quantity > 1) {
          decrementingItem.quantity -= 1;
          return {
            ...state,
            items: [...state.items]
          }
        } else {
          let deletingItem = state.items.filter(item => action.payload.item.id !== item.id)
          return {
            ...state,
            items: deletingItem,
          }
        }

      case DELETE_CART_ITEM:
        let new_items = state.items.filter(item => action.payload.id !== item.id)
        return {
          ...state,
          items: new_items,
        }
      case LOAD_CART_LIST_ERROR:
        return {
          ...state
        }
        break;
      default:
        return {
          ...state
        }
    }
  });

export default cartReducer;
