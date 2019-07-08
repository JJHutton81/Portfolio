import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import HomeBody from "./components/homeBody/HomeBody";
import AboutMe from "./components/aboutPages/AboutMe";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import LandingPage from "./components/landing/LandingPage";

import "./App.css";

const App = ({ location }) => {
  const currentKey = location.pathname.split("/")[1] || "/";
  const timeout = { enter: 1500, exit: 1500 };

  return (
    <TransitionGroup component="main" className="page-main">
      <CSSTransition
        key={currentKey}
        timeout={timeout}
        classNames="fade"
        appear
      >
        <Switch location={location}>
          <Route exact path="/" component={LandingPage} />
          <Route path="/projects" component={HomeBody} />
          <Route path="/about" component={AboutMe} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(App);
