/**
 *
 * Cart
 *
 */

import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { loadCartList } from './actions'
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeCartListItemsSelector } from './selectors';
import makeSelectCart from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { Title, CartWrapper, CartItemWrapper } from './styled-components'
import CartListItems from './components/CartListItem'
export function Cart(props) {
  let { cartItems } = props;
  useInjectReducer({ key: 'cart', reducer });
  useInjectSaga({ key: 'cart', saga });
  useEffect(() => {
    props.loadCartList();
  }, []);
  const updateCartTotal = () => {
    if (cartItems.length) {
      return (
        <Title>
          Total :{' '}
          {(cartItems.reduce((a, b) => a + b.price * b.quantity, 0)).toFixed(2)}
        </Title>
      );
    }
  }



  return (

    <>
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="Description of Cart" />
      </Helmet>
      {/* <FormattedMessage {...messages.header} /> */}
      {
        cartItems.length > 0 &&
        <CartWrapper  >
            <div>
              <Title>ORDER</Title>
              <hr/>
              {
                cartItems.map((item, key) => (
                  <div key={key} >
                    <CartItemWrapper>
                      <CartListItems cartList={item} />

                    </CartItemWrapper>
                    <hr/>
                  </div>
                ))
              }
              <div>
                <div>{cartItems.length && updateCartTotal()}</div>
              </div>
            </div>

        </CartWrapper>
      }
    </>
  );
}



const mapStateToProps = createStructuredSelector({
  cartItems: makeCartListItemsSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadCartList: () => dispatch(loadCartList()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Cart);
