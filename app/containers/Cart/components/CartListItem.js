import React, { memo, useEffect } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeCartListItemsSelector } from './../selectors';
import makeSelectCart from './../selectors';
import { IncrementBtn, DecrementBtn, QuantityField, ProductImage, ListItems, QuantityWrapper, ProductName } from './../styled-components'
import { loadCartList, deleteCartItem, incrementQty, decrementQty } from './../actions'
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './../reducer';
import saga from './../saga';

export function CartListItem(props) {
    useInjectReducer({ key: 'cart', reducer });
    useInjectSaga({ key: 'cart', saga });
    let { cartList, deleteCartItem, incrementQty, decrementQty } = props;
    return (
        <>
            <ProductImage src={cartList.image} className="img-fluid" alt="" />
            <ListItems>
                <ProductName>{cartList.name}</ProductName>
            </ListItems>
            <ListItems>
                <QuantityWrapper>
                    <DecrementBtn onClick={() => decrementQty(cartList)}>
                        <span className="increment">-</span>
                    </DecrementBtn>
                    <QuantityField>
                        <span className="quantity">{cartList.quantity} </span>
                    </QuantityField>
                    <IncrementBtn onClick={() => incrementQty(cartList)}>
                        <span className="increment">+</span>
                    </IncrementBtn>
                </QuantityWrapper>
            </ListItems>
            <ListItems>
                <p>{cartList.price}</p>
            </ListItems>
            <ListItems >
                <i
                    className="fa fa-trash-o"
                    aria-hidden="true"
                    onClick={() => {
                        deleteCartItem(cartList.id);
                    }}
                />
            </ListItems>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    cart: makeSelectCart(),
    // cartItems: makeCartListItemsSelector(),
});

function mapDispatchToProps(dispatch) {
    return {
        deleteCartItem: (id) => dispatch(deleteCartItem(id)),
        incrementQty: (item) => dispatch(incrementQty(item)),
        decrementQty: (item) => dispatch(decrementQty(item)),
    };
}
const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(CartListItem);
