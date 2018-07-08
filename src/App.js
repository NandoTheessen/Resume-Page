import React, { Component } from 'react';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Content from "./components/Content";
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Skills from './components/Skills'
import Education from './components/Education';
import Publications from './components/Publications';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path='/' component={Header} />
        <Route exact path='/' component={Content} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/education' component={Education} />
        <Route exact path='/publications' component={Publications} />
        <Route path='/' component={Footer} />
      </div>
    );
  }
}

export default App;
