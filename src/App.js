import React, { Component } from 'react';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path='/' component={Header} />
        <Route path='/' component={Content} />
      </div>
    );
  }
}

export default App;
