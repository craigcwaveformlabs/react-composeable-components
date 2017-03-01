import React, { Component } from 'react';
import Modal from './components/Modal';
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

      </div>
    );
  }
}

export default App;
