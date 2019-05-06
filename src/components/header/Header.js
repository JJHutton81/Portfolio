import React, { Component } from "react";

import HeadBackground from '../../media/headBackground.jpg'

import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div class="headerBody">
                <div class="headWrapper">
                    <div class="innerHead">
                      <h1 class="title">James Hutton's Portfolio</h1>
                    </div>
                </div>
            </div>
        )
    }
}