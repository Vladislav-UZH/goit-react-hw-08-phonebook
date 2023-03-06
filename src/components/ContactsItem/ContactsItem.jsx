import { Item, Name, Number, Container } from './ContactsItem.styled';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';

const ContactsItem = ({
  id,
  name: nameValue,
  number: numberValue,
  deleteContact,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(nameValue);
  const [number, setNumber] = useState(numberValue);
  const dispatch = useDispatch();
  const handleChange = e => {
    const inputValue = e.target.value;
    const inputName = e.target.name;

    switch (inputName) {
      case 'name':
        setName(inputValue);
        return;
      case 'number':
        setNumber(inputValue);
        return;
      default:
        return;
    }
  };
  const handleChangeMode = () => {
    if (isEdit) {
      setIsEdit(prv => !prv);
      if (!name || !number) {
        alert('You forgot to enter your contacts data!');
        return;
      }
      if (name === nameValue && number === numberValue) {
        alert('Nothing to change.');
        return;
      }
      dispatch(editContact({ id, name, number }));
      return;
    }
    setIsEdit(prv => !prv);
  };
  return (
    <Item>
      <Container>
        {isEdit ? (
          <>
            <input
              onChange={handleChange}
              onFocus={e => e.target.select()}
              defaultValue={nameValue}
              name="name"
              type="text"
            />
            <input
              onChange={handleChange}
              onFocus={e => e.target.select()}
              defaultValue={numberValue}
              name="number"
              type="text"
            />
          </>
        ) : (
          <>
            <Name>{nameValue}: </Name>
            <Number> {numberValue}</Number>
          </>
        )}
      </Container>
      <Button
        variant="delete"
        title={isEdit ? 'Save' : 'Edit'}
        type="button"
        onClick={handleChangeMode}
      />
      <Button
        variant="delete"
        title="Delete"
        type="button"
        onClick={deleteContact}
      />
    </Item>
  );
};

ContactsItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};
export default ContactsItem;
