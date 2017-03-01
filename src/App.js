import React, { Component } from 'react';
import Modal from './components/Modal';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal1: false
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
        </ul>

        { this.state.modal1 &&
          <Modal onClose={() => this.toggleModal('modal1')} />
        }

      </div>
    );
  }
}

export default App;
