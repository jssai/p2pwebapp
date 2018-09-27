import React from 'react';
import Modal from 'react-modal';
import './style.scss';
/*
Refer this for Documentation regarding Modal:
http://reactcommunity.org/react-modal
*/
Modal.setAppElement('#app');

class ModalComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Modal {...this.props}>
        {this.props.children}
      </Modal>
    );
  }
}

export default ModalComponent;
