import { all, take, call, put, select, delay } from 'redux-saga/effects';
import products from './mock-data/productList'
import { loadProductListSuccess } from './actions'


export function* loadProductList() {
  
  yield delay(1000)
  yield put(loadProductListSuccess(products))
}

// Individual exports for testing
export default function* productListSaga() {
  yield all([loadProductList()]);
}
