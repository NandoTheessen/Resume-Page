import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Nav = styled('nav')`
  width: 42vw;
  margin: auto;
  height: 40;
  top: 0;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  align-items: center;
`;

const NavWrapper = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  height: 24px;
  width: 100%;

  /* this is what centers your element in the fixed wrapper*/
  display: flex;
  flex-flow: column nowrap;
  justify-content: center; /* aligns on vertical for column */
  align-items: center; /* aligns on horizontal for column */

  /* just for styling to see the limits */
  box-sizing: border-box;
`;

const Header = props => {
  return (
    <NavWrapper>
      <Nav>
        <Link to="/yy">PUBLICATIONS</Link>
        <Link to="/yz">PROJCETS</Link>
        <Link to="/yz">EXPERIENCE</Link>
        <Link to="/yz">BLOG</Link>
      </Nav>
    </NavWrapper>
  );
};

export default Header;
