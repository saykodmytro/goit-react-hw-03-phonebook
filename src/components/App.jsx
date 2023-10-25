import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';

import { Container } from './Container/Container';
import { Filter } from './Filter/Filter';
import PhoneForm from './PhoneForm/PhoneForm';

import { contactsData } from 'Utils/contactsData';

export class App extends Component {
  state = {
    contacts: contactsData,
    filter: '',
  };

  componentDidMount() {
    const stringifiedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringifiedContacts) ?? contactsData;

    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentWillUnmount() {}

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

console.log('hello');
