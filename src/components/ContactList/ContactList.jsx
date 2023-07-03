import PropTypes from 'prop-types';
import UList from './ContactList.styled';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const contactList = () =>
    filter
      ? contacts.filter(({ name }) => name.toLowerCase().includes(filter))
      : contacts;

  return (
    <UList>
      {contactList().map(({ id, name, number }) => (
        <li key={id}>
          {`${name}: ${number}`}
          <button type="submit" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </UList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
