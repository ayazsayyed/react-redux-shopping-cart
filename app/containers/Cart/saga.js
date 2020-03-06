import { all, take, call, put, select } from 'redux-saga/effects';
import { loadProductListSuccess } from './actions'

// Individual exports for testing

export function* loadCartList() {
}


export function* incrementQty() {
  yield takeL
}

export default function* cartSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadCartList()]);
}
