import React from 'react';
import { FormData } from './FormData/FormData';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import defaultContact from '../contacts.json';

export class App extends React.Component {
  state = {
    contacts: defaultContact,
    filter: '',
  };

  componentDidMount() {
    const storage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storage);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onSubmit = ({ name, number }) => {
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    const findContact = this.state.contacts.find(
      contact => contact.name === name
    );
    if (findContact) {
      return alert(`Ooops, ${name} is already in contacts`);
    } else {
      return this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  showVisibleContact = () => {
    const { contacts, filter } = this.state;
    const filtred = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtred;
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.showVisibleContact();
    return (
      <>
        <FormData onSubmit={this.onSubmit} />
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts contacts={visibleContact} onDelete={this.deleteContact} />
      </>
    );
  }
}
