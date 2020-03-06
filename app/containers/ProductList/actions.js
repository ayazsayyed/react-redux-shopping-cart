/*
 *
 * ProductList actions
 *
 */

import { LOAD_PRODUCT_LIST, LOAD_PRODUCT_LIST_SUCCESS, LOAD_PRODUCT_LIST_ERROR, ADD_TO_CART } from './constants';

export function loadProductList() {
  return {
    type: LOAD_PRODUCT_LIST,
    
  };
}

export function loadProductListSuccess(products) {
  return {
    type: LOAD_PRODUCT_LIST_SUCCESS,
    payload:{
      products
    }
  };
}


export function loadProductListError(error) {
  return {
    type: LOAD_PRODUCT_LIST_ERROR,
    error
  };
}

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload:{
      product
    }
  };
}

addToCart