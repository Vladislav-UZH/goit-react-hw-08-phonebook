import ContactsItem from 'components/ContactsItem';
import { List } from './ContactsList.styled';
import { selectFilteredContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          deleteContact={() => {
            dispatch(deleteContact(id));
          }}
        />
      ))}
    </List>
  );
};

export default ContactsList;
