import { Component } from 'react';
import shortid from 'shortid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from '../components/App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };g

  checkingUniqueNames = name => {
    return this.state.contacts.find(obj => obj.name === name);
  };

  addContactName = (name, number) => {
    if (this.checkingUniqueNames(name)) {
      alert(`${name} is already is contacts`);
    } else {
      const contact = {
        name,
        number,
        id: shortid.generate(),
      };
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContactName} />
        <h2>Contact</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
