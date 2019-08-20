import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import { Spring } from "react-spring/renderprops";

import "./homeBody.css";
import './HomeBodyMobile.css';

import STMenu from "../menu/starTrek/STMenu";
import JOBDPop from "./cardpop/JOBDPop";
import NTAPop from "./cardpop/NTAPop";

export default class HomeBody extends Component {
  render() {
    return (
      // <Spring
      //   config={{ duration: 2000 }}
      //   from={{ marginTop: 1000, marginLeft: 1000 }}
      //   to={{ marginTop: 0, marginLeft: 0 }}
      // >
      //   {props => (
          // <div class="HBWrapper" style={props}>
          <div className='page-wrap'>
            <div className="menu-wrap">
              <STMenu />
            </div>
            <div className="title">
              <h1>Projects</h1>
            </div>
            
              <div class="cardWrapper">
                <div className="cardContainer">
                  <JOBDPop />
                  <NTAPop />
                </div>
              </div>
            
            <div className="SubNav">
                <NavLink
                  to="/about"
                  style={{
                    display: "flex",
                    textDecoration: "none",
                    alignSelf: "flex-end",
                    marginRight: "2%"
                  }}
                >
                  <button className="SubNavBtn">
                    <p class="pButt">About</p>
                  </button>
                </NavLink>
                
                <NavLink
                  to="/skills"
                  style={{
                    display: "flex",
                    textDecoration: "none",
                    alignSelf: "flex-end",
                    marginRight: "2%"
                  }}
                >
                  <button className="SubNavBtn">
                    <p class="pButt">Skills</p>
                  </button>
                </NavLink>
              </div>
        </div>
        
      //   )}
      // </Spring>
    );
  }
}
