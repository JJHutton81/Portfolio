import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Spring } from "react-spring/renderprops";

import './homeBody.css';

import STMenu from '../menu/starTrek/STMenu';

import JOBDThumb from './homeTumbs/jobdthumb.png';
import Note from './homeTumbs/note.png';

export default class HomeBody extends Component {
  render() {
    return (
      <Spring config={{duration: 2000}} from={{ marginTop: 1000, marginLeft: 1000 }} to={{ marginTop: 0, marginLeft: 0 }}>
                    { props => (
      <div class='HBWrapper' style={ props }>
        <div>
          <STMenu />
        </div>
        <div class="headerBody">  
          <div class='cardWrapper'>
            <div className='cardContainer'>
            <div class='card'>
              <h2 className='CTitle'>Capstone Project</h2>    
              <img className='JOBD' src={JOBDThumb} alt="Thumbnail of Lab Project" />
            </div>
          
            <div class='card' onClick={this.openModal}>
              <h2 className='CTitle'>Note Keeping App</h2>    
              <img className='JOBD' src={Note} alt="Thumbnail of Note App" />
            </div>
            
            </div>
          </div>
          <NavLink to='/skills'
            style={{ 
              display: 'flex',
              textDecoration: 'none',
              alignSelf: 'flex-end',
              marginRight: '2%',
            }}
          > 
          <button className='ProjectButton'>
            <p class='pButt'>Next</p>  
          </button>
          </NavLink> 
        </div>    
      </div> 
    )
          }
          </Spring>  
    )
  }
}
