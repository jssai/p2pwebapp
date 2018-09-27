import React, { Fragment } from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import Modal from 'components/Modal';
import './style.scss';

// default messages
const messages = defineMessages({
  join: {
    id: 'joinList',
    defaultMessage: 'Join Waiting List'
  }
});

const customStyles = {
  content: {
    display: 'flex',
    flex: 1
  }
};

class JoinList extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    console.log('modal opened...');
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    console.log('modal closed...');
  }

  render() {
    return (
      <Fragment>
        <li>
          <a role="link"><FormattedMessage {...messages.join} /></a>
        </li>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-test">
            <h5>hello</h5>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default JoinList;
