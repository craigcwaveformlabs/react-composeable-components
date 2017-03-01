import React, { PropTypes } from 'react';
import Modal from './Modal';

const AlertModal = ({ onClose, message, confirmLabel, heading }) => {
  return (
    <Modal
      closable={false}
      width="narrow"
      onClose={onClose}
    >
      {heading &&
        <h2>{heading}</h2>
      }
      <p>{message}</p>
      <div className="c-modal__footer">
        <button onClick={onClose}>{confirmLabel}</button>
      </div>
    </Modal>
  );
};

AlertModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  confirmLabel: PropTypes.string,
  heading: PropTypes.string,
};

AlertModal.defaultProps = {
  confirmLabel: 'OK',
  heading: '',
};

export default AlertModal;