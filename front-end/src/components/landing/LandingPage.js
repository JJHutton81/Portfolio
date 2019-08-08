import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Spring } from "react-spring/renderprops";

import Heart from '../../media/heart.png';

import './landing.css';
import './landingMobile.css';

export default class LandingPange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: true,
    };
  }

  ToggleClass = (e) => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {

      return (
          <div 
            className={(this.state.isActive) ? 'LPBody' : 'none'} 
            onClick={this.ToggleClass}>
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div class="clouds"></div>
            <div className="moon"></div>
            <div class='landingCard'>
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={3000}>
                { props => (
                  <h1 style={ props }>
                    Hello, I'm James Hutton.
                  </h1>
                  ) 
                } 
              </Spring>
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={5000}>
                { props => (
                  <h1 style={ props }>
                    I'm a full stack Web Developer.
                  </h1>
                  ) 
                } 
              </Spring>
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={7000}>
                { props => (
                  <h1 style={ props }>
                    Coding is my Life.
                  </h1>
                  ) 
                } 
              </Spring>
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={9000}>
                { props => (
                  <h1 style={ props }>
                    UI/UX is my Love.
                  </h1>
                  ) 
                } 
              </Spring>
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={11000}>
                { props => (
                    <h1 style={ props }>
                    Click anywhere to get started.
                  </h1>
                  ) 
                } 
                </Spring>
              </div>
            </div>
    )
  }
}
  