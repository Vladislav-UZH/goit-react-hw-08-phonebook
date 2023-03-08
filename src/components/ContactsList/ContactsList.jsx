import ContactsItem from 'components/ContactsItem';
import { List } from './ContactsList.styled';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import Notification from 'components/Notification';
const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  return !!filteredContacts.length ? (
    <List>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={() => {
            dispatch(deleteContact(id));
          }}
        />
      ))}
    </List>
  ) : (
    <Notification message="No contacts with the entered name here!" />
  );
};

export default ContactsList;
