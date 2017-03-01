import React, { PropTypes } from 'react';

import ModalClose from './ModalClose';

const ModalContainer = ({ onClose }) => (
  <div className="c-modal__container">
    Children go here
    <ModalClose onClose={onClose} />
  </div>
);

ModalContainer.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default ModalContainer;