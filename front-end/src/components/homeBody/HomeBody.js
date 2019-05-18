import React, { Component } from 'react';

import './homeBody.css';

import STMenu from '../menu/starTrek/STMenu';

import JOBDThumb from './homeTumbs/jobdthumb.png';
import Note from './homeTumbs/note.png';

export default class HomeBody extends Component {
  render() {
    return (
      <div class='HBWrapper'>
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
        </div>    
      </div>   
    )
  }
}
