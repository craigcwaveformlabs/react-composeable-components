import React, { Component, PropTypes } from 'react';

import ModalContainer from './ModalContainer';

import './Modal.css';

class Modal extends Component {
  render() {
    return (
      <div className="c-modal">
        <ModalContainer onClose={this.props.onClose}>

        </ModalContainer>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default Modal;