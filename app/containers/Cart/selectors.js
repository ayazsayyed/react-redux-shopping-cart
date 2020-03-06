import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cart state domain
 */

const selectCartDomain = state => state.cart || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Cart
 */

const makeSelectCart = () =>
  createSelector(
    selectCartDomain,
    substate => substate,
  );

const makeCartListItemsSelector = () =>
  createSelector(
    selectCartDomain,
    substate => substate.items
  )



export default makeSelectCart;
export { selectCartDomain, makeCartListItemsSelector };
