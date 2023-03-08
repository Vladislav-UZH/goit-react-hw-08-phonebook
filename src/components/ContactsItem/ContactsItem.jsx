import { Item, Name, Number, Container } from './ContactsItem.styled';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import toast from 'react-hot-toast';
import { Formik, Form, Field } from 'formik';

const ContactsItem = ({
  id,
  name: nameValue,
  number: numberValue,
  deleteContact,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const initialValues = {
    name: nameValue,
    number: numberValue,
  };
  //

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
    const normalizedName = name.trim();
    const normalizedNnumber = number.trim();
    if (!normalizedName || !normalizedNnumber) {
      toast.error('You forgot to enter your contacts data!');
      return;
    }
    if (normalizedName === nameValue && normalizedNnumber === numberValue) {
      toast.error('Nothing to change.');
      return toggleIsEdit();
    }
    dispatch(editContact({ id, normalizedName, normalizedNnumber }));
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
              <Button variant="edit" title="Save" type="submit" />
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
