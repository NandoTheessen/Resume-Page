import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Header = styled('div')`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled('nav')``;

const HeaderContainer = props => {
  return (
    <Header>
      <h1>NANDO THEESSEN</h1>
      <Nav>
        <Link to="/yy">PUBLICATIONS</Link>
        <Link to="/yz">PROJCETS</Link>
      </Nav>
    </Header>
  );
};

export default HeaderContainer;
