import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Trail } from "react-spring/renderprops";

import Heart from '../../media/heart.png';
import HookedComponent from './hooks/Hook1';

import './landing.css';

const posts = [
  { title: "Hello, I'm James Hutton.", id: 1 },
  { title: "I'm a full stack Web Developer", id: 2 },
  { title: "Coding is my Life.", id: 3 },
  { title: "UI/UX is my Love.", id: 4 }
];

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
                  <Trail
                    items={posts}
                    keys={post => post.id}
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                    delay={3000}
                  >
                  {post => props => (
                  <h1 className='landingTitle' style={props} className="post">
                  {post.title}
                  </h1>
                  )}
                  </Trail>
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
  