import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './menu.css';

import Home from './icons/home.png';
import Man from './icons/manager.png';
import Skills from './icons/solution.png';
import Contact from './icons/contact.png';


export default class Menu extends Component {
  render() {
    return (
      <div class='MBodyWrap'>
        <div class='SubWrap'>
        <div class='RedInvertUpper'></div>
          <div class='RedInvertLower'></div>
          <ul class='LinkWrap'>
            <div>  
              <li>
                <Link to='/'>  
                  <button class="button button-red">  
                  <img src={Home} alt='Home Icon' />
                  <p>Home</p>  
                  </button>
                </Link>    
              </li>
            </div>
            <div>
              <li>
                <Link to='/aboutme'>  
                  <button class="button button-red">  
                  <img src={Man} alt='Person Icon' />
                  <p>About Me</p>  
                  </button>
                </Link>   
              </li>
            </div>
            <div>  
              <li>
                <Link to='/'>  
                  <button class="button button-red">  
                  <img src={Skills} alt='Puzzle Icon' />
                  <p>Skills</p>  
                  </button>
                </Link>    
              </li>
            </div>
            <div>  
              <li>
                <Link to='/'>  
                  <button class="button button-red">  
                  <img src={Contact} alt='Contact Icon' />
                  <p>Contact</p>  
                  </button>
                </Link>    
              </li>
            </div>    
          </ul>
        </div>          
      </div>
    )
  }
}