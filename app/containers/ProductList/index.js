/**
 *
 * ProductList
 *
 */

import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { loadProductList, addToCart } from './actions'
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeProductListItemsSelector, makeLoadingSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import styled from 'styled-components';
import messages from './messages';

const ProductName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 10px 0 0 0;
  color:#777
`;
const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  color:#777
`;

const CartButton = styled.button`
  font-weight: 500;
  font-size: 0.7rem;
  text-transform: uppercase;
  border-radius: 2px;
  background-color: #ff3e6c;
  color: #fff;
  letter-spacing: 0.3px;
  cursor: pointer;
  padding: 8px 12px;
  border: none;
`;


const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 100%;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  // margin: 1rem;
  padding: .5rem;
  width: 100%;
  @media (min-width: 450px){
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: 768px){
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  @media (min-width: 1200px){
    flex: 0 0 25%;
    max-width: 25%;
  }
  
`;

const Card = styled.div`
background-color: #fff;
  background-clip: border-box;
  border: .0625rem solid rgba(0,0,0,.05);
  border-radius: .25rem;
  box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
  // margin: 1rem;
  padding: .5rem;
`;
const ImageWrapper = styled.div`
  padding: .25rem;
  background-color: #fff;
  border: .0625rem solid #dee2e6;
  border-radius: .25rem;
  box-shadow: 0 1px 2px rgba(0,0,0,.075);
  // width:250px;
  // @media (max-width: 900px) {
  //   width: 190px;
  // }
  // @media (max-width: 500px) {
  //   width: 140px;
  // }
  
`;
const Img = styled.img`
width:100%;
  max-width: 100%;
  height: auto;

`;
const Loader = styled.h2`
  text-align: center;
  margin: auto;
  font-size: 2rem;
  color: #ff3e6c;
  font-style: italic;
  font-weight: normal;
`;


export function ProductList(props) {

  let { productsListItems, loading, addToCart } = props;
  useInjectReducer({ key: 'productList', reducer });
  useInjectSaga({ key: 'productList', saga });



  useEffect(() => {
    props.loadProductList();
  }, []);

  const fetch_Data = () => {
    if (productsListItems.length > 0) {
      return (
        productsListItems.map((product, key) => (
          <Column key={key} data-id={product.id}>
            <Card>
            <ImageWrapper><Img src={product.image}  ></Img></ImageWrapper>

            <ProductName>{product.name}</ProductName>
            <ProductPrice className="m-0" key={product.id}>${product.price}</ProductPrice>
            <CartButton onClick={() => addToCart(product)}> Add to bag</CartButton>
            </Card>
          </Column>
        )
        )
      )
    }
  }

  return (
    <>
      <Helmet>
        <title>ProductList</title>
        <meta name="description" content="Description of ProductList" />
      </Helmet>
      <Row >
        {
          loading ? <Loader> Loading....</Loader> : fetch_Data()
        }

      </Row>


    </>
  );



}


const mapStateToProps = createStructuredSelector({
  productsListItems: makeProductListItemsSelector(),
  loading: makeLoadingSelector()
});

function mapDispatchToProps(dispatch) {
  return {
    loadProductList: () => dispatch(loadProductList()),
    addToCart: (product) => dispatch(addToCart(product)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ProductList);
