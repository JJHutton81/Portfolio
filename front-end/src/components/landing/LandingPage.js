import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Heart from '../../media/heart.png';

import './landing.css';


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
          <div class='LPBody'>
            <div class='element'></div>
            <div class='element2'>
              <div class='heartWraper'>
                <div class='landingCard'>
                  <h1 class='landingTitle'>Hello, I'm James Hutton.</h1>
                  <h1 class='landingTitle'>I'm a full stack Web Developer</h1>
                  <h1 class='landingTitle'>Coding is my Life.</h1>
                  <h1 class='landingTitle'>UI/UX is my Love.</h1>
                  <div class='buttonWrap'>
                    <Link to='/about'> 
                      <button
                        className={(this.state.isActive) ? 'landingButton' : 'fall'}
                        onClick={this.ToggleClass}>
                        <p class='pButt'>See my work</p>  
                      </button>
                    </Link>
                  </div>  
                </div>
                <img class='heartBeat' src={Heart} alt='A human heart' />
              </div>
            </div>
          </div>
      )
    }
    }
  