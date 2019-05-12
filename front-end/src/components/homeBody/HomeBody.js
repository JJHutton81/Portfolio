import React, { Component } from 'react';
import Modal from 'react-modal';

import './homeBody.css';
import './decorativeDiv.css';

import STMenu from '../menu/starTrek/STMenu';

import JOBDThumb from './homeTumbs/jobdthumb.png';
import Note from './homeTumbs/note.png';

Modal.setAppElement('body');

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default class HomeBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  toggleMenu = (e) => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  

  render() {
    return (
      <div class='HBWrapper'>
        <div class='navWrapper'>
          <STMenu />
        </div>
        <div class="headerBody">  
          <div className='borderDiv'>
          <div className ='redPulse'></div>
          <div className ='decWrap'>
          <div className ='skewedTealBorder'></div>
          <div className ='skewedTealBorder2'></div>
          <div className ='skewedTealBorder3'></div>
          <div className ='skewedTealBorder4'></div>
          <div className ='skewedTealBorder5'></div>
          <div className ='skewedTealBorder6'></div>
          <div className ='skewedTealBorder7'></div>
          <div className ='skewedTealBorder8'></div>
          </div>
          <div class='cardWrapper'>
          <h1 class="title">James Hutton's Portfolio</h1>
            <div className='cardContainer'>
            <div class='card' onClick={this.openModal}>
              <h2>Capstone Project</h2>    
              <img src={JOBDThumb} alt="Thumbnail of Lab Project" />
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            > 
              <h2 ref={subtitle => this.subtitle = subtitle}>Capstone Project</h2>
                <img src={JOBDThumb} alt="Thumbnail of Lab Project" />
                <p>We take the hitch out of getting hitched.</p>
                <a href="https://joinourbigday.netlify.com" 
                  rel="noopener noreferrer"
                  target="_blank"><h2>Go to </h2></a>
                <h2>About this project</h2>
                <button onClick={this.closeModal}><h2>Go Back</h2></button>
            </Modal>
          
            <div class='card' onClick={this.openModal}>
              <h2>Note Keeping App</h2>    
              <img src={Note} alt="Thumbnail of Note App" />
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            > 
              <h2 ref={subtitle => this.subtitle = subtitle}>Capstone Project</h2>
                <img src={Note} alt="Thumbnail of Note App" />
                <p>A basic note keeping app.</p>
                <a href="https://basicnoteapp.netlify.com" 
                  rel="noopener noreferrer"
                  target="_blank"><h2>Go to </h2></a>
                <h2>About this project</h2>
                <button onClick={this.closeModal}><h2>Go Back</h2></button>
            </Modal>
            </div>
          </div> 
        </div>    
      </div>
    </div>     
    )
  }
}
