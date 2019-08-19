import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./skills.css";

import STMenu from "../menu/starTrek/STMenu";
import SkillsDeck from "./SkillsDeck";

export default class Skills extends Component {
    render() {
        return(
            <div className="SkillBody">
                <div className="MenuWrap">
                  <STMenu />
                </div>
                <div className="SubNav">
                <NavLink
                  to="/projects"
                  style={{
                    display: "flex",
                    textDecoration: "none",
                    alignSelf: "flex-end",
                    marginRight: "2%"
                  }}
                >
                  <button className="SubNavBtn">
                    <p class="pButt">Projects</p>
                  </button>
                </NavLink>
                <h1 class="SiteTitle">Skills</h1>
                <NavLink
                  to="/contact"
                  style={{
                    display: "flex",
                    textDecoration: "none",
                    alignSelf: "flex-end",
                    marginRight: "2%"
                  }}
                >
                  <button className="SubNavBtn">
                    <p class="pButt">Contact</p>
                  </button>
                </NavLink>
              </div>
              <div className="skills-deck-wrap">
                  <SkillsDeck />
              </div>
            </div>
        )
    }
}