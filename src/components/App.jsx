import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const LOCAL_STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeFilter = value => {
    setFilter(value.filter);
  };

  const handleSubmit = values => {
    if (contacts.some(({ name }) => name === values.name)) {
      alert(`${values.name} is already in contacts.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, { ...values }]);
  };
  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter onChange={handleChangeFilter} />
      <ContactList
        contacts={contacts}
        filter={filter.toLowerCase()}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

// const INITIAL_STATE = {
//   contacts: [
//     // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// export class App extends Component {
//   state = { ...INITIAL_STATE };

//   componentDidMount() {
//     if (localStorage.getItem('contacts')) {
//       this.setState({
//         contacts: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)),
//       });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts.length !== this.state.contacts.length) {
//       localStorage.setItem(
//         LOCAL_STORAGE_KEY,
//         JSON.stringify(this.state.contacts)
//       );
//     }
//   }

//   handleSubmit = values => {
//     if (this.state.contacts.some(({ name }) => name === values.name)) {
//       alert(`${values.name} is already in contacts.`);
//       return;
//     }
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, { ...values }],
//     }));
//   };

//   handleDeleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//     }));
//   };

//   handleChangeFilter = value => {
//     this.setState({ ...value });
//   };
//   render() {
//     const { contacts, filter } = this.state;
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.handleSubmit} />

//         <h2>Contacts</h2>
//         <Filter onChange={this.handleChangeFilter} />
//         <ContactList
//           contacts={contacts}
//           filter={filter.toLowerCase()}
//           onDeleteContact={this.handleDeleteContact}
//         />
//       </div>
//     );
//   }
// }
