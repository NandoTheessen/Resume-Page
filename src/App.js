import React, { Component } from 'react';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Content from "./components/Content";
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path='/' component={Header} />
        <Route exact path='/' component={Content} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route path='/' component={Footer} />
      </div>
    );
  }
}

export default App;
