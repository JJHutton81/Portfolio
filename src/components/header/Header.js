import React, { Component } from "react";

import HeadBackground from '../../media/headBackground.jpg'

import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div class="headerBody">
                <div class="headWrapper">
                    <div class="innerHead">
                      {/* <img class='headBG' src={HeadBackground} alt="Close up of concrete." />; */}
                    </div>
                </div>
            </div>
        )
    }
}