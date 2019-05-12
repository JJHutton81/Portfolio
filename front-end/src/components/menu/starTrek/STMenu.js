import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './stMenu.css';

const LinkStyle = {
  backgroundColor: 'transparent',
	borderRadius: '8px',
	border: '5px solid wheat',
	display: 'inline-block',
	cursor: 'pointer',
	color: 'wheat',
	fontFamily: "Stylish, sans-serif",
	fontSize: '1.5rem',
	fontWeight: 'bold',
	padding: '1%',
  textDecoration: 'none',
  textAlign: 'center',
  margin: '2%',
  width: '80%'
}

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
          {this.state.isOpen && <div class="sidebar">
          <div class='stLinkWrap'>
            <div class='stButtWrap'>  
              <NavLink style={LinkStyle} activeStyle={{backgroundColor: 'wheat', color: "#FF4136"}} exact path to='/'><p>Home</p></NavLink> 
              <NavLink style={LinkStyle} activeStyle={{backgroundColor: 'wheat', color: "#FF4136"}} to='/projects'><p>Projects</p></NavLink>     
              <NavLink style={LinkStyle} activeStyle={{backgroundColor: 'wheat', color: "#FF4136"}} to='/aboutme'><p>About Me</p></NavLink>    
              <NavLink style={LinkStyle} activeStyle={{backgroundColor: 'wheat', color: "#FF4136"}} to='/skills'><p>Skills</p></NavLink>     
              <NavLink style={LinkStyle} activeStyle={{backgroundColor: 'wheat', color: "#FF4136"}} to='/contact'><p>Contact</p></NavLink>     
            </div>    
          </div>
        </div>  
        }
        <button class='STMButton' onClick={() => this.toggleMenu()}>Toggle Menu</button>
      </div>
    );
  }
}