import React, {Component} from 'react';
import axios from 'axios';

import STMenu from '../menu/starTrek/STMenu';

import './contact.css';

export default class Contact extends Component{

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        name: name,
        email: email,
        messsage: message
      }
    }).then((response) => {
      if (response.data.msg === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.msg === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {
    document.getElementById('contact-form').reset();
  }
  
  render(){
    return(
      <div className='ContactBody'>
        <div><STMenu /></div>
        <div className='ContactWrap'>
          <h1 className='ContactTitle'>This site is still under construction. Thank you for your patience.</h1>
          <h1 className='ContactTitle'>Do you have any questions, comments, or want to work with me?</h1>
          <h1 className='ContactTitle'>Let's make something special.</h1>    
        {/* </div> */}
        <form method="POST" action="https://formspree.io/jjhutton81@gmail.com">
          <div className="form-group">
            
            <input type="email" name="email" placeholder="Enter Your Email" className="form-control" />
          </div>
          <div className="form-group">
            
            <textarea name="message" placeholder="What's on your mind?" className="form-control" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
        )
    }
}

