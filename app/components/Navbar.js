import React from 'react'
import styled from 'styled-components';

const Header = styled.div`
font-size: 2.5em;
    text-align: left;
    color: #ff3e6c;
    padding: 20px;
    background: #e0e0e0;
    margin-bottom: 30px;
`;

function Navbar() {
    return (
        <>
            <Header><div className="header"><span>Acme E-Commerce</span></div></Header>
        </>
    )
}

export default Navbar
