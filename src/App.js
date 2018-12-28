import React, { Component } from 'react';
import HeaderContainer from './components/Header';
import { Route } from 'react-router-dom';
import Social from './components/Social';
import styled from '@emotion/styled';

class App extends Component {
  render() {
    return (
      <AppContainer className="app">
        <Route path="/" component={HeaderContainer} />
        <Social />
        {/*         <Route exact path="/" component={Content} />
        <Route path="/" component={Footer} /> */}
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled('div')`
  a {
    text-decoration: none;
    color: lightblue;
    :hover {
      text-decoration: none;
      color: lightblue;
    }
  }
`;
