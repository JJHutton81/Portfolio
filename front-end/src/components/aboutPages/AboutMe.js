import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Spring } from "react-spring/renderprops";

import STMenu from '../menu/starTrek/STMenu';

import Car from './icons/car.png';
import Bulb from './icons/creativity.png';
import Dynamic from './icons/dynamic.png';
import Resp from './icons/responsive.png';
import Head from './icons/headshot.jpg';

import './aboutMe.css';
import '../landing/landing.css';

export default class AboutMe extends Component {
    render() {
        return(
            <div className='AMWrap'>
                <div className='MenuWrap'>
                    <STMenu />
                </div>
                <div className='AMBodyWrapper'>
                  <Spring from={{ opacity: 0, marginBottom: -1000 }} to={{ opacity: 1, marginBottom: .5 }} delay={3000}>
                    { props => (
                    <div className='AMCardWrapper' style={ props }>
                        <div className="hexagon">
                            <img src={Car} alt='A Speedomoter' />
                        </div>
                        <h2 className='AMCTitle'>Fast</h2>
                        <h3 className='AMCText'>Fast load times, and zero lag interface, is my top priority.</h3>
                    </div>
                    )
                    }
                    </Spring>
                    <Spring from={{ opacity: 0, marginBottom: -1000 }} to={{ opacity: 1, marginBottom: .5 }} delay={3500}>
                    { props => (
                    <div className='AMCardWrapper' style={ props }>
                        <div className="hexagon">
                            <img src={Resp} alt='A Monitor, Tablet, and Cellphone' />
                        </div>
                        <h2 className='AMCTitle'>Responsive</h2>
                        <h3 className='AMCText'>My layouts work on any device, big, small, I plan for them all.</h3>
                    </div>
                    )
                    }
                    </Spring>
                    <Spring from={{ opacity: 0, marginBottom: -1000 }} to={{ opacity: 1, marginBottom: .5 }} delay={4000}>
                    { props => (
                    <div className='AMCardWrapper' style={ props }>
                        <div className="hexagon">
                            <img src={Bulb} alt='A Lightbulb With A Brain Inside' />
                        </div>
                        <h2 className='AMCTitle'>Intuitive</h2>
                        <h3 className='AMCText'>I strive for ease of use, and highly intuitive UI/UX</h3>
                    </div>
                    )
                    }
                    </Spring>
                    <Spring from={{ opacity: 0, marginBottom: -1000 }} to={{ opacity: 1, marginBottom: .5 }} delay={4500}>
                    { props => (
                    <div className='AMCardWrapper' style={ props }>
                        <div className="hexagon">
                            <img src={Dynamic} alt='An Atom' />
                        </div>
                        <h2 className='AMCTitle'>Dynamic</h2>
                        <h3 className='AMCText'>I want to see the internet come to life.</h3>
                    </div>
                    )
                    }
                    </Spring>
                    </div>
                <div className='AMCard2Boday'>
                <Spring from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: .5 }} delay={5000}>
                    { props => (
                <div className='AMCardWrapper2' style={ props }>
                    {/* <div class="hexagon2"> */}
                        <img className='Head' src={Head} alt='My Headshot' />
                    {/* </div> */}
                    <div className='AMCSubWrapper'>
                    <h2 className='AMCTitle'>Who am I?</h2>
                    <h3 className='AMCText2'>I am a Full-Stack Web Developer based out of Seattle, WA.</h3>
                    <h3 className='AMCText2'>I have a background in the arts, and Graphic Design. I transitioned my skills to Web Development.</h3>
                    <h3 className='AMCText2'>I love UI effects, animations, and creating intuitive, dynamic, and memorable user experiences.</h3>
                    <h3 className='AMCText2'>My passion is to make the internet come alive, and show people that the internet can be a creative and artistic place, 
                        without sacraficing performance, and ease of use.</h3>
                    <h3 className='AMCText2'>Let's make something special, together.</h3> 
                    </div> 
                    <NavLink to='/projects'
                        style={{ 
                            display: 'flex',
                            textDecoration: 'none',
                            alignSelf: 'flex-end',
                            marginRight: '2%',
                        }}
                    > 
                    <button className='AboutButton'>
                        <p class='pButt'>Next</p>  
                    </button>
                    </NavLink>  
                </div>
                    )
                    }
                    </Spring>
                    </div>
            </div>
        )
    }
}