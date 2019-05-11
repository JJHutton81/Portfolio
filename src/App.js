import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeBody from './components/homeBody/HomeBody';
import AboutMe from './components/aboutPages/AboutMe';
import Skills from './components/menu/Menu';
import Contact from './components/contact/Contact';
import LandingPage from './components/landing/LandingPage';

import './App.css';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/projects' component={HomeBody} />
        <Route path='/aboutme' component={AboutMe} />
        <Route path='/skills' component={Skills} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
