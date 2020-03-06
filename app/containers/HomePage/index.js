/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ProductListing from './../ProductList'
import Cart from './../Cart'
import styled from 'styled-components';
import Navbar from './../../components/Navbar'

export const ContainerFluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
export const Row = styled.div`
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  align-items: flex-start;
  @media (max-width:991px){
    flex-wrap:wrap;
  }
`
export default function HomePage() {
  return (
    <>
    <Navbar/>
    <ContainerFluid>
      <Row>
        <ProductListing />
        <Cart />
      </Row>
    </ContainerFluid>
    </>
  );
}
