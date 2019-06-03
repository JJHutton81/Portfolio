import React, {Component} from 'react';

import STMenu from '../menu/starTrek/STMenu';

import './contact.css';

export default class Contact extends Component{
  render(){
    return(
      <div className='ContactBody'>
        <div><STMenu /></div>
        <div className='ContactWrap'>
          <h1 className='ContactTitle'>This site is still under construction. Thank you for your patience.</h1>
          <h1 className='ContactTitle'>Do you have any questions, comments, or want to work with me?</h1>
          <h2 className='ContactTitle'>Contact me at: jjhutton81@gmail.com</h2>
          <h1 className='ContactTitle'>Let's make something special.</h1>    
        </div>
      </div>
        )
    }
}

