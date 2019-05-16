import React, { Component } from "react";

import STMenu from '../menu/starTrek/STMenu';

import './aboutMe.css';

export default class AboutMe extends Component {
    render() {
        return(
            <div className='AMWrap'>
                <div>
                    <STMenu />
                </div>
                <div>
                    <div>
                        <h2>Fast</h2>
                        <h3>Fast load times, and zero lag interface, is my top priority.</h3>
                    </div>
                    <div>
                        <h2>Responsive</h2>
                        <h3>My layouts work on any device, big, small, I plan for them all.</h3>
                    </div>
                    <div>
                        <h2>Intuitive</h2>
                        <h3>I strive for ease of use, and highly intuitive UI/UX</h3>
                    </div>
                    <div>
                        <h2>Static websites are boring. I want to see the internet come to life.</h2>
                    </div>
                    <div>
                        <h2>Who am I?</h2>
                        <h3>I am a Full-Stack Web Developer based out of Seattle, WA.</h3>
                        <h3>I have a background in the arts, and Graphic Design. I transitioned my skills to Web Development.</h3>
                        <h3>I love UI effects, animations, and creating intuitive, dynamic, and memorable user experiences.</h3>
                        <h3>My passion is to make the internet come alive, and show people that the internet can be a creative and artistic place, 
                            without sacraficing performance, and ease of use.</h3>
                        <h3>Let's make something special, together.</h3>    
                    </div>
                </div>
            </div>
        )
    }
}