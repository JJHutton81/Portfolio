import React, { Component } from 'react';
import { Spring, Transition, animated, config } from "react-spring/renderprops";

import './jobdpop.css';

import Note from '../homeTumbs/note.png';
import NLogo from '../homeTumbs/netlify.png';
import HLogo from '../homeTumbs/heroku.png';
import GitHub from '../homeTumbs/github.png';
import Cat from '../homeTumbs/ghcat.png';

export default class NTAPop extends Component {
  state = { index: 0 }
    toggleNTA = e =>
      this.setState(state => ({
        index: state.index === 2 ? 0 : state.index + 1,
    }))
    toggleBackNTA = e =>
      this.setState(state => ({
        index: state.index === 2 ? 1 : state.index - 1,
    }))
    toggleCloseNTA = e =>
      this.setState(state => ({
        index: state.index !== 0 ? 0 : state.index === 0,
    })) 
    render() {
      const pages = [
        style => (
          <animated.div style={{ ...style }} className='JOBDcard'>
            <h2 className='CTitle'>Note Keeping App</h2>
            <img className='JOBD' src={Note} alt="Thumbnail of Lab Project" />
            <span className='PsudoButt' onClick={this.toggleNTA}>Learn More</span>
          </animated.div>
        ),
        style => (
          <animated.div style={{ ...style }} className='JOBDcard'>
            <h1 className='CTitle'>Note Keeping App</h1>
            <h2 className='CText'>This app was the combination of two seperate build weeks at Lambda School, 
              the front-end build week, and the back-end.</h2>
            <h2 className='CText'>The App Allows you to create, edit, and delete text based notes, which are stored on a server.</h2> 
            <span className='PsudoButt' onClick={this.toggleNTA}>Learn Even More</span>
            <span className='PsudoButt' onClick={this.toggleCloseNTA}>Close</span>
          </animated.div>
        ),
        style => (
          <animated.div style={{ ...style }} className='BigPop'>
            <h1 className='CTitle'>Note Keeping App</h1>
            <h2 className='CText'>This note keeping app is the combination of my front-end, and back-end web development training. </h2>
            <div className='DepCardNTA'>
              <div className='DepNTATitle'>
                <h1 className='CTitle'>Deployment</h1>
              </div>
              <div className='DepNTABody'>
                <div className='DepNTABodyLeft'>
                  <h2 className='CText'>The front-end was deployed on</h2>
                  <img src={NLogo} className='NLogo' alt="" />
                </div>
                <div className='DepNTABodyRight'>  
                  <h2 className='CText'>The back-end was deployed on</h2>
                  <img src={HLogo} className='HLogo' alt="" />
                </div>
              </div>  
            </div>
            <a className='JLink' href="https://basicnoteapp.netlify.com" target="_blank" rel="noopener noreferrer"><span className='PsudoButt'>Go To App</span></a>
            <a className='JLink' href="https://github.com/FreeKeyBoy/back-end-project-week" target="_blank" rel="noopener noreferrer"><span className='PsudoButt'>Readme</span></a>
            <a className='JLink' href="https://github.com/FreeKeyBoy/front-end-project-week" target="_blank" rel="noopener noreferrer"><span className='PsudoButt'>Repository on <img className='Cat' src={Cat} alt="" /><img className='GHLogo' src={GitHub} alt="" /></span></a>
            <span className='PsudoButt' onClick={this.toggleBackNTA}>Go Back</span>
            <span className='PsudoButt' onClick={this.toggleCloseNTA}>Close</span>
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