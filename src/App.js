import React, { Component } from 'react';
import HeaderContainer from './components/Header';
import { Route } from 'react-router-dom';
import Social from './components/Social';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" component={HeaderContainer} />
        <Social />
        {/*         <Route exact path="/" component={Content} />
        <Route path="/" component={Footer} /> */}
      </div>
    );
  }
}

export default App;
