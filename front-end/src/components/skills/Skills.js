import React, { Component } from 'react';
import { Spring } from "react-spring/renderprops";
import { NavLink } from 'react-router-dom';

import STMenu from '../menu/starTrek/STMenu';
import HTMLCard from '../skills/skillCards/HTMLCard';
import CSSCard from '../skills/skillCards/CSSCard';
import JavaScriptCard from '../skills/skillCards/JavaScriptCard';
import ReactCard from '../skills/skillCards/ReactCard';
import NodeCard from '../skills/skillCards/NodeCard';
import SQLCard from '../skills/skillCards/SQLCard';
import UIUXCard from '../skills/skillCards/UIUXCard';
import PythonCard from '../skills/skillCards/PythonCard';
import Photoshop from '../skills/skillCards/Photoshop';
import Illustator from '../skills/skillCards/Illustrator';

import './skills.css';

export default class Skills extends Component {
    render() {
      return (
        <Spring
          config={{ duration: 2000 }}
          from={{ marginTop: 1000, marginLeft: 1000 }}
          to={{ marginTop: 0, marginLeft: 0 }}
        >
          {props => (
            <div className="SkillBody" style={props}>
              <div>
                <STMenu />
              </div>
              <div class="SkillWrapper">
                <Spring
                  config={{ duration: 800, delay: 3000 }}
                  from={{
                    transform:
                      "translate3d(800px,500px,0) scale(2) rotateX(180deg)",
                    boxShadow: "0px 100px 150px -10px #2D3747"
                  }}
                  to={{
                    transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
                    boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.4)"
                  }}
                >
                  {props => (
                    <div style={props}>
                      <HTMLCard />
                    </div>
                  )}
                </Spring>
                <Spring
                  config={{ duration: 1000, delay: 2500 }}
                  from={{
                    transform:
                      "translate3d(100px,-600px,0) scale(2) rotateX(360deg)",
                    opacity: 0
                  }}
                  to={{
                    transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
                    opacity: 1
                  }}
                >
                  {props => (
                    <div style={props}>
                      <CSSCard />
                    </div>
                  )}
                </Spring>
                <Spring
                  config={{ duration: 1500, delay: 3500 }}
                  from={{
                    transform:
                      "translate3d(-200px,600px,0) scale(3) rotateY(360deg) rotateX(360deg)",
                    opacity: 0
                  }}
                  to={{
                    transform:
                      "translate3d(0px,0,0) scale(1) rotateY(0deg) rotateX(0deg)",
                    opacity: 1
                  }}
                >
                  {props => (
                    <div style={props}>
                      <JavaScriptCard />
                    </div>
                  )}
                </Spring>
                <Spring
                  config={{ duration: 1500, delay: 3500 }}
                  from={{
                    transform:
                      "translate3d(-200px,600px,0) scale(3) rotateY(360deg) rotateX(360deg)",
                    opacity: 0
                  }}
                  to={{
                    transform:
                      "translate3d(0px,0,0) scale(1) rotateY(0deg) rotateX(0deg)",
                    opacity: 1
                  }}
                >
                  {props => (
                    <div style={props}>
                      <ReactCard />
                    </div>
                  )}
                </Spring>
                <Spring
                  config={{ duration: 1500, delay: 3500 }}
                  from={{
                    transform:
                      "translate3d(-200px,600px,0) scale(3) rotateY(360deg) rotateX(360deg)",
                    opacity: 0
                  }}
                  to={{
                    transform:
                      "translate3d(0px,0,0) scale(1) rotateY(0deg) rotateX(0deg)",
                    opacity: 1
                  }}
                >
                  {props => (
                    <div style={props}>
                      <NodeCard />
                    </div>
                  )}
                </Spring>
                <Spring
                  config={{ duration: 800, delay: 3000 }}
                  from={{
                    transform:
                      "translate3d(800px,500px,0) scale(2) rotateX(180deg)",
                    boxShadow: "0px 100px 150px -10px #2D3747"
                  }}
                  to={{
                    transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
                    boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.4)"
                  }}
                >
                  {props => (
                    <div style={props}>
                      <SQLCard />
                    </div>
                  )}
                </Spring>
                <Spring
                  config={{ duration: 1000, delay: 2500 }}
                  from={{
                    transform:
                      "translate3d(100px,-600px,0) scale(2) rotateX(360deg)",
                    opacity: 0
                  }}
                  to={{
                    transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
                    opacity: 1
                  }}
                >
                  {props => (
                    <div style={props}>
                      <UIUXCard />
                    </div>
                  )}
                </Spring>
                <Spring
                  config={{ duration: 1000, delay: 2500 }}
                  from={{
                    transform:
                      "translate3d(100px,-600px,0) scale(2) rotateX(360deg)",
                    opacity: 0
                  }}
                  to={{
                    transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
                    opacity: 1
                  }}
                >
                  {props => (
                    <div style={props}>
                      <PythonCard />
                    </div>
                  )}
                </Spring>
                <Spring
                  config={{ duration: 800, delay: 3000 }}
                  from={{
                    transform:
                      "translate3d(800px,500px,0) scale(2) rotateX(180deg)",
                    boxShadow: "0px 100px 150px -10px #2D3747"
                  }}
                  to={{
                    transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
                    boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.4)"
                  }}
                >
                  {props => (
                    <div style={props}>
                      <Photoshop />
                    </div>
                  )}
                </Spring>
                <Spring
                  config={{ duration: 800, delay: 3000 }}
                  from={{
                    transform:
                      "translate3d(800px,500px,0) scale(2) rotateX(180deg)",
                    boxShadow: "0px 100px 150px -10px #2D3747"
                  }}
                  to={{
                    transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
                    boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.4)"
                  }}
                >
                  {props => (
                    <div style={props}>
                      <Illustator />
                    </div>
                  )}
                </Spring>
                <NavLink
                  to="/contact"
                  style={{
                    display: "flex",
                    textDecoration: "none",
                    alignSelf: "flex-end",
                    marginRight: "2%"
                  }}
                >
                  <button className="ProjectButton">
                    <p class="pButt">Next</p>
                  </button>
                </NavLink>
              </div>
            </div>
          )}
        </Spring>
      );    
    }
}