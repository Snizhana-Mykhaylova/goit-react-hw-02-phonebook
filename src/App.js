import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from './Components/Form';
import Contacts from './Components/Contacts';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    const contact = {
      name: data,
      id: uuidv4(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleIncrement = option => {
    return this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <ul>
          Contacts
          <Contacts contacts={this.state.contacts} />
        </ul>
      </div>
    );
  }
}

export default App;
