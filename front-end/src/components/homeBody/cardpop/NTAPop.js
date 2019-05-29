import React, { Component } from 'react';
import { Spring, Transition, animated, config } from "react-spring/renderprops";

import './jobdpop.css';

import Note from '../homeTumbs/note.png';

export default class NTAPop extends Component {
  state = { index: 0 }
    toggle = e =>
      this.setState(state => ({
        index: state.index === 2 ? 0 : state.index + 1,
    }))
    toggleBack = e =>
      this.setState(state => ({
        index: state.index === 2 ? 1 : state.index - 1,
    }))
    toggleClose = e =>
      this.setState(state => ({
        index: state.index !== 0 ? 0 : state.index === 0,
    })) 
    render() {
      const pages = [
        style => (
          <animated.div style={{ ...style }} className='JOBDcard'>
            <h2 className='CTitle'>Note Keeping App</h2>
            <img className='JOBD' src={Note} alt="Thumbnail of Lab Project" />
            <span className='PsudoButt' onClick={this.toggle}>Learn More</span>
          </animated.div>
        ),
        style => (
          <animated.div style={{ ...style }} className='JOBDcard'>
            <h1 className='CTitle'>Note Keeping App</h1>
            <h2 className='CText'>This app was the combination of two seperate build weeks at Lambda School, 
              the front-end build week, and the back-end.</h2>
            <h2 className='CText'>The App Allows you to create, edit, and delete text based notes, which are stored on a server.</h2> 
            <span className='PsudoButt' onClick={this.toggle}>Learn Even More</span>
            <span className='PsudoButt' onClick={this.toggleClose}>Close</span>
          </animated.div>
        ),
        style => (
          <animated.div style={{ ...style }} className='BigPop'>
            <h1 className='CTitle'>Note Keeping App</h1>
            <h2 className='CText'>This note keeping app is the combination of my front-end, and back-end web development training. </h2>
            <h2>This app helps consumers handle thier wedding guest list digitally, simplifying the RSVP process, by allowing people to handle it digitally.</h2>
            <h2>There are several other features that incentivize the consumer to use the app over traditional wedding invitations, or in conjuction with them.</h2>
            <span className='PsudoButt' onClick={this.toggleBack}>Go Back</span>
            <span className='PsudoButt' onClick={this.toggleClose}>Close</span>
          </animated.div>
        ),
      ]
      return(
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={3000} config={config.molasses}>
          { props => (
            <div className='BigPopWrap' style={props}>
              <div className='CardClick' onClick={this.toggle}>
                <Transition
                  native
                  reset
                  unique
                  items={this.state.index}
                  from={{ opacity: 0, transform: 'scale3d(0, 0, 0)' }}
                  enter={{ opacity: 1, transform: 'scale3d(1, 1, 1)' }}
                  leave={{ opacity: 0, transform: 'scale3d(0, 0, 0)' }}>
                  {index => pages[index]}
                </Transition>   
              </div> 
            </div>
          )
          }
        </Spring>            
      )
    }
}