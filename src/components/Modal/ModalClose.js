import React, { Component, PropTypes } from 'react';

class ModalClose extends Component {
  handleClick(ev) {
    ev.preventDefault();
    console.log('clicked');
    this.props.onClose();
  }

  render() {
    return (
      <button
        className="c-modal__close"
        onClick={(ev) => this.handleClick(ev)}
      >
        Close
      </button>
    );
  }
}

ModalClose.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default ModalClose;