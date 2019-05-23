import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Spring } from "react-spring/renderprops";

import './homeBody.css';

import STMenu from '../menu/starTrek/STMenu';
import JOBDPop from './cardpop/JOBDPop';
import NTAPop from './cardpop/NTAPop';

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
              <JOBDPop />
              <NTAPop />
            </div>
          </div>
          <NavLink to='/skills'
            style={{ 
              display: 'flex',
              textDecoration: 'none',
              alignSelf: 'flex-end',
              marginRight: '4%',
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
