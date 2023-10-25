import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';

import { Container } from './Container/Container';
import { Filter } from './Filter/Filter';
import PhoneForm from './PhoneForm/PhoneForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = newContact => {
    const hasDuplicates = this.state.contacts.some(
      contact => contact.name === newContact.name
    );
    if (hasDuplicates) {
      return alert(
        `Oops, product with title '${newContact.name}' already exist!`
      );
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  handleFilterChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  handlerFilter = () => {
    let searchContact = [];
    if (this.state.filter) {
      searchContact = this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    } else {
      searchContact = this.state.contacts;
    }
    return searchContact;
  };

  render() {
    return (
      <>
        <Container title="Phonebook">
          <PhoneForm handleAddContact={this.handleAddContact} />
        </Container>
        <Container title="Search">
          <Filter
            filter={this.state.filter}
            handleFilterChange={this.handleFilterChange}
          />
        </Container>

        <Container title="Contacts">
          <ContactList
            contacts={this.handlerFilter()}
            handleDelete={this.handleDelete}
          />
        </Container>
      </>
    );
  }
}
