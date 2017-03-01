import React, { PropTypes } from 'react';

import ModalClose from './ModalClose';

import './Modal.css';

const Modal = ({ closeable, onClose, width, children }) => {
  const containerClass = `c-modal__container c-modal__container--${width}`;
  return (
    <div className="c-modal">
      <div className={containerClass}>
        {children}
        {closeable &&
          <ModalClose onClose={onClose} />
        }
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  closeable: PropTypes.bool,
  width: PropTypes.oneOf(['narrow', 'wide']),
}

Modal.defaultProps = {
  closeable: false,
  width: 'wide'
};

export default Modal;