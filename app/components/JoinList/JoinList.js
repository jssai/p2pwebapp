import React, { Fragment } from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import { Modal } from 'react-bootstrap';
import Toastr from 'components/Toastr';
import API from 'api';
import './style.scss';

// default messages
const messages = defineMessages({
  join: {
    id: 'joinList',
    defaultMessage: 'Join Waiting List'
  }
});

class JoinList extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      name: '',
      mail: ''
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (Math.random() > 0.5) {
      this.closeModal();
      Toastr.success('You have been added to the waiting list');
      this.setState({
        name: '',
        mail: ''
      });
    } else {
      Toastr.error('Car went wrong..!');
    }
    // API.get('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(({ status, data }) => {
    //     if (status === 200) {
    //       this.closeModal();
    //       Toastr.error('You have been added to the waiting list');
    //       this.setState({
    //         name: '',
    //         mail: ''
    //       });
    //     }
    //   }).catch((err) => {
    //     if (err && err.status === 400) {
    //       Toastr.error(err.result);
    //     } else {
    //       console.log(err);
    //     }
    //   });
  }

  handleChange = (value) => {
    this.setState(value);
  }

  render() {
    return (
      <Fragment>
        <li>
          <a role="link" onClick={this.openModal}><FormattedMessage {...messages.join} /></a>
        </li>
        <Modal
          show={this.state.modalIsOpen}
          onHide={this.closeModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="waitingList"
        >
          <Modal.Body>
            <h5 className="title mb-4">Join our waiting list</h5>
            <div className="row justify-content-center">
              <div className="col-8">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      required
                      type="text"
                      className="form-control form-control-sm"
                      aria-describedby="name"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={(e) => this.handleChange({ name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      required
                      className="form-control form-control-sm"
                      aria-describedby="email"
                      placeholder="Email"
                      value={this.state.mail}
                      onChange={(e) => this.handleChange({ mail: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn btn-sm btn-block">Submit</button>
                </form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}

export default JoinList;
