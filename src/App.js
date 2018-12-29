import React, { Component } from 'react';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Social from './components/Social';
import styled from '@emotion/styled';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <AppContainer className="app">
        <Route path="/" component={Header} />
        <Social />
        <Main path="/" />

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
    color: #f81894;
    :hover {
      text-decoration: none;
      // color: lightblue;
    }
  }
`;
