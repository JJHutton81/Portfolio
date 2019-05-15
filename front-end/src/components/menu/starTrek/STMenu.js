import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'glamor';

import './stMenu.css';

const LinkStyle = css({
  fontFamily: "Stylish, sans-serif",
  textDecoration: 'none',
  fontSize: '1.5rem',
  color: 'wheat',
})

export default class STMenu extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        isOpen: false,
      };
    }
  
    toggleMenu() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  
    render() {
      return (
        <div class="wrapper">
        <div class="SiteTitleWrap">
          <h1 class="SiteTitle">James Hutton's Portfoilo</h1>
          </div>
          {this.state.isOpen && <div class="sidebar">
          <div class='stLinkWrap'>
            <div class='stButtWrap'>  
              <button class='STMButton'><NavLink {...LinkStyle} exact path to='/'><span>Home</span></NavLink></button> 
              <button class='STMButton'><NavLink {...LinkStyle} to='/projects'><span>Projects</span></NavLink></button>     
              <button class='STMButton'><NavLink {...LinkStyle} to='/about'><span>About</span></NavLink></button>    
              <button class='STMButton'><NavLink {...LinkStyle} to='/skills'><span>Skills</span></NavLink></button>     
              <button class='STMButton'><NavLink {...LinkStyle} to='/contact'><span>Contact</span></NavLink></button>     
            </div>    
          </div>
        </div>  
        }
        <button class='STMButton' onClick={() => this.toggleMenu()}>Menu</button>
      </div>
    );
  }
}