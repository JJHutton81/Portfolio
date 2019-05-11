import React, { Component } from 'react';
import ReactModal from 'react-modal';

import './homeBody.css';

import Menu from '../menu/Menu';

import JOBDThumb from './homeTumbs/jobdthumb.png';

ReactModal.setAppElement('#root')

export default class HomeBody extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <div class='HBWrapper'>
        <Menu />
        <div class="headerBody">
            <div class="headWrapper">
              <div class="innerHead">
                <h1 class="title">James Hutton's Portfolio</h1>
              </div>
            </div>  
            <div class='CardWrapperWrapper'>
              <div class='CardWrapper'>
                <button onClick={this.openModal}>
                  <h2>Lab Project</h2>
                  <img src={JOBDThumb} alt="Thumbnail of Lab Project" />
                </button>
                <ReactModal 
                  isOpen={this.state.modalIsOpen}
                  className="modal"
                >
                <div class='ModalWrapper'>
                  <img src={JOBDThumb} alt="Thumbnail of Lab Project" />
                  <a href="https://joinourbigday.netlify.com" 
                    rel="noopener noreferrer"
                    target="_blank"><h2>Go to </h2></a>
                    <h2>About this project</h2>
                    <button onClick={this.closeModal}><h2>Go Back</h2></button>
                </div>
                </ReactModal>
            </div>    
          </div>
        </div>
      </div>
    )
  }
}