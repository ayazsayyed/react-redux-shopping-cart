/*
 *
 * Cart actions
 *
 */

import { LOAD_CART_LIST, LOAD_CART_LIST_SUCCESS, LOAD_CART_LIST_ERROR, DELETE_CART_ITEM, INCREMENT_ITEM_QUANTITY, DECREMENT_ITEM_QUANTITY } from './constants';


export function loadCartList() {
  return {
    type: LOAD_CART_LIST,
  };
}

export function loadCartListSuccess(items) {
  return {
    type: LOAD_CART_LIST_SUCCESS,
    items
  };
}


export function loadCartListError(error) {
  return {
    type: LOAD_CART_LIST_ERROR,
    error
  };
}
export function incrementQty(item) {
  
  return {
    type: INCREMENT_ITEM_QUANTITY,
    payload:{
      item
    }
  };
}
export function decrementQty(item) {  
  return {
    type: DECREMENT_ITEM_QUANTITY,
    payload:{
      item
    }
  };
}
export function deleteCartItem(id) {  
  return {
    type: DELETE_CART_ITEM,
    payload:{
      id
    }
  };
}

