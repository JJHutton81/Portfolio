import React, { Component } from 'react';
import { Spring, Transition, animated, config } from "react-spring/renderprops";
import PieChart from 'react-minimal-pie-chart';

import '../skills.css';

export default class JavaScriptCard extends Component {
    state = { index: 0 }
    toggleHTML = e =>
        this.setState(state => ({
            index: state.index === 1 ? 0 : state.index + 1,
        }))
    toggleBackHTML = e =>
        this.setState(state => ({
            index: state.index === 1 ? 0 : state.index - 1,
        }))
    render() {
        return (
            <div>

            </div>
        )
    }
}