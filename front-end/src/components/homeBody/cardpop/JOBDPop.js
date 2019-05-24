import React, { Component } from 'react';
import { Spring, Transition, animated, config } from "react-spring/renderprops";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import JOBDCarousel from './jobdCarousel/JOBDCarousel';

import './jobdpop.css';

import JOBDThumb from '../homeTumbs/jobdthumb.png';
import NLogo from '../homeTumbs/netlify.png';
import HLogo from '../homeTumbs/heroku.png';

export default class JOBDPop extends Component {
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
            <h2 className='CTitle'>Capstone Project</h2>
            <img className='JOBD' src={JOBDThumb} alt="Thumbnail of Lab Project" />
            <span className='PsudoButt' onClick={this.toggle}>Learn More</span>
          </animated.div>
        ),
        style => (
          <animated.div style={{ ...style }} className='JOBDcard'>
            <h1 className='CTitle'>We take the hitch out of getting hitched.</h1>
            <h2 className='CText'>This is my Capstone prject while attending Lambda School.
              This app helps consumers handle thier wedding guest list digitally, simplifying the RSVP process, by allowing people to handle it digitally.
              There are several other features that incentivize the consumer to use the app over traditional wedding invitations, or in conjuction with them.</h2>
            <span className='PsudoButt' onClick={this.toggle}>Learn Even More</span>
            <span className='PsudoButt' onClick={this.toggleClose}>Close</span>
          </animated.div>
        ),
        style => (
          <animated.div style={{ ...style }} className='BigPop'>
            {/* <JOBDCarousel /> */}
            <div className='CTextWrap'>
            <h1 className='CTitle'>Join Our Big Day</h1>
            <h2 className='CText'>Join Our Big Day is the result of a five person dev team, over the course of ten weeks. The purpose of the school project was to 
              simulate the real world environment of web development. Each developer worked on both the back-end and the front-end, as needed.</h2>
            <h2 className='CText'>Join Our Big Day is an application that solves the problems of managing wedding guests by allowing users to interactively 
              manage and view their guests lists, RSVPs, have access to live upload of photos from all attendees, and use google maps for effortless navigation 
              to get your family and friends where you need them when you need them. We are here to help you get hitched without a hitch.</h2>  
            <div>
              <div>  
                <h2 className='CText'>The front-end was deployed on</h2>
                <img src={NLogo} className='NLogo'/>
                <h2 className='CText'>The back-end was deployed on</h2>
                <img src={HLogo} className='HLogo'/>
              </div>
              <div>
                <h2 className='CTitle'>Developer Team</h2>
                <h2 className='CText'>James Hutton</h2>
                <h2 className='CText'>Megan Fontenot</h2>
                <h2 className='CText'>Christopher Roth</h2>
                <h2 className='CText'>Marguel Gutierrez</h2>
                <h2 className='CText'>Joseph Mercado</h2>
              </div>
            </div>  
            <span className='PsudoButt' onClick={this.toggleBack}>Go Back</span>
            <span className='PsudoButt' onClick={this.toggleClose}>Close</span>
            </div>
          </animated.div>
        ),
      ]
      return(
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={3000} config={config.molasses}>
          { props => (
            <div className='BigPopWrap' style={props}>
              <div className='CardClick'>
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