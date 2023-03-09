import { Item, Name, Number, Container } from './ContactsItem.styled';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import toast from 'react-hot-toast';
import { Formik, Form, Field } from 'formik';
import { selectContacts } from 'redux/contacts/selectors';

const ContactsItem = ({
  id,
  name: nameValue,
  number: numberValue,
  deleteContact,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isNeedDisable, setIsNeedDisable] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const initialValues = {
    name: nameValue,
    number: numberValue,
  };
  //
  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, [timeoutId]);
  //
  const toggleIsEdit = () => {
    setIsEdit(prev => !prev);
  };
  //
  const handleEdit = e => {
    return toggleIsEdit();
  };
  //
  const handleSubmit = ({ name, number }) => {
    const trimmedName = name.trim();
    const trimmedNumber = number.trim();
    if (!trimmedName || !trimmedNumber) {
      toast.error('You forgot to enter your contacts data!');
      return;
    }
    if (trimmedName === nameValue && trimmedNumber === numberValue) {
      toast.error('Nothing to change.');
      return toggleIsEdit();
    }
    if (contacts.some(contact => contact.name.trim() === trimmedName)) {
      setIsNeedDisable(true);
      setTimeoutId(setTimeout(() => setIsNeedDisable(false), 3000));
      if (contacts.some(contact => contact.number.trim() === trimmedNumber)) {
        return toast.error(`${number} is already in your contacts!`);
      }
      return toast.error(`${name} is already in your contacts!`);
    }

    dispatch(editContact({ id, name: trimmedName, number: trimmedNumber }));
    return toggleIsEdit();
  };

  return (
    <Item>
      <Container>
        {!isEdit ? (
          <>
            <Name>{nameValue}: </Name>
            <Number> {numberValue}</Number>
          </>
        ) : (
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form
              style={{
                display: 'flex',
                gap: 10,
              }}
            >
              <Field
                style={{
                  color: '#dbd7d7',
                  backgroundColor: 'transparent',
                  outline: '#e2580a solid 1px',
                  borderRadius: 10,
                  paddingLeft: 10,
                  border: 'none',
                }}
                onFocus={e => e.target.select()}
                name="name"
                type="text"
              />
              <Field
                style={{
                  color: '#dbd7d7',
                  backgroundColor: 'transparent',
                  outline: '#e2580a  solid 1px',
                  borderRadius: 10,
                  paddingLeft: 10,
                  border: 'none',
                }}
                onFocus={e => e.target.select()}
                name="number"
                type="text"
              />
              <Button
                disabled={isNeedDisable}
                variant="edit"
                title="Save"
                type="submit"
              />
            </Form>
          </Formik>
        )}
      </Container>
      {!isEdit && (
        <Button
          variant="edit"
          title="Edit"
          type="button"
          onClick={handleEdit}
        />
      )}
      <Button
        variant="delete"
        title="Delete"
        type="button"
        onClick={deleteContact}
      />
      {/*      
          <Container>
            {isEdit ? (
                 <Formik>
        <Form>
          
            <Field
                  onChange={handleChange}
                  onFocus={e => e.target.select()}
                  defaultValue={nameValue}
                  name="name"
                  type="text"
                />
                <Field
                  onChange={handleChange}
                  onFocus={e => e.target.select()}
                  defaultValue={numberValue}
                  name="number"
                  type="text"
                />
            ) : (
              <>
                <Name>{nameValue}: </Name>
                <Number> {numberValue}</Number>
            )}
          </Container>
          <Button
            variant="edit"
            title={isEdit ? 'Save' : 'Edit'}
            type="button"
            onClick={handleChangeMode}
          />
        </Form>
      </Formik>
      <Button
        variant="delete"
        title="Delete"
        type="button"
        onClick={deleteContact}
      /> */}
    </Item>
  );
};

ContactsItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};
export default ContactsItem;
