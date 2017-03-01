import React, { Component } from 'react';
import Modal from './components/Modal/Modal';
import AlertModal from './components/Modal/AlertModal';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal1: false,
      modal2: false,
      modal3: false,
    };
  }
  
  toggleModal(modal) {
    this.setState({
      [modal]: !this.state[modal]
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li>Basic modal <button onClick={() => this.toggleModal('modal1')}>Launch</button></li>
          <li>Closable modal <button onClick={() => this.toggleModal('modal2')}>Launch</button></li>
          <li>Narrow modal <button onClick={() => this.toggleModal('modal3')}>Launch</button></li>
          <li>Alert modal <button onClick={() => this.toggleModal('modal4')}>Launch</button></li>
        </ul>

        { this.state.modal1 &&
          <Modal
            onClose={() => this.toggleModal('modal1')}
          />
        }

        { this.state.modal2 &&
          <Modal
            closeable
            onClose={() => this.toggleModal('modal2')}
          />
        }

        { this.state.modal3 &&
          <Modal
            onClose={() => this.toggleModal('modal3')}
            width="narrow"
          />
        }

        { this.state.modal4 &&
          <AlertModal
            onClose={() => this.toggleModal('modal4')}
            heading="Hello pal"
            message="Please click this here button"
            confirmLabel="Whatevs"
          />
        }

      </div>
    );
  }
}

export default App;
