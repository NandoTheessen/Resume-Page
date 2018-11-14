import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

const Header = styled('div')`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: lightblue;
    :hover {
      text-decoration: none;
      color: lightblue;
    }
  }
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
