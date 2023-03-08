import { AddContactsBtn } from 'components/Button/Button.styled';
import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import SkeletonLoader from 'components/SkeletonLoader/SkeletonLoader';
import Notification from 'components/Notification';
import { useAuth } from 'hooks';
import { useEffect, useState } from 'react';
import { BsPencilFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const { isRefreshing } = useAuth();
  // const isLoading = useSelector(selectIsLoading);
  // console.log(contacts);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const toggleContactBar = () => {
    setIsOpen(true);
  };
  return isRefreshing ? (
    <SkeletonLoader />
  ) : (
    <div
      style={{
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#DBD7D7',
      }}
    >
      <div
        style={{
          minWidth: 680,
          borderRadius: 10,
          padding: 30,
          backgroundColor: '#32343B ',
        }}
      >
        <div></div>
        <h1>Phonebook</h1>
        {isOpen || !!contacts.length ? (
          <ContactsForm />
        ) : (
          <AddContactsBtn onClick={toggleContactBar}>
            Add your contacts
            <BsPencilFill size={40} />
          </AddContactsBtn>
        )}
        <div>
          <h2>Contacts</h2>
          <Filter />
        </div>
        {!contacts.length ? (
          <Notification message="No contacts with the entered name!" />
        ) : (
          <ContactsList />
        )}
      </div>
    </div>
  );
};
export default Contacts;
