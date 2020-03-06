import styled from 'styled-components';

export const Title = styled.h5`
font-size: 20px;
margin: 1rem;
color:#4e4e4e;
`;
export const CartWrapper = styled.div`
background: #e0e0e0;
padding: .5rem 1rem;
text-align: center;
max-height: 500px;
overflow-y: auto;
min-width: 25%;
    max-width: 25%;
    flex: 1 1 25%;
    margin: 1rem;
    @media (max-width:991px){
      max-width: 100%;
    }
`;

export const IncrementBtn = styled.span`
font-size: 20px;
font-weight: 600;
margin: 0 10px;
color: #ff3e6c;
cursor: pointer;
`;
export const DecrementBtn = styled(IncrementBtn)``;

export const QuantityField = styled.span`
background: #fff;
display: flex;
justify-content: center;
align-items: center;
min-width: 30px;
font-size: 15px;
color: #ff3e6c;
`;

export const ProductImage = styled.img`
width:40px;
`;
export const CartItemWrapper = styled.ul`
display: flex;
padding: 0;
display: flex;
justify-content: space-between;
align-items: center;
& ${ListItems}:nth-child(3) {
    margin-left:auto;
  }
  
  
`;
export const ListItems = styled.div`
list-style: none;
`
export const QuantityWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
export const ProductName = styled.p`
font-size:0.9rem;
margin: 0 0 0 10px;
`;