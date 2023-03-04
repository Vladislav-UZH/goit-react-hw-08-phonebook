// Styles
import { Container, Input, Label, ErrorNotify } from './ContactsForm.styled';
import { CreateContactBtn } from 'components/Button/Button.styled';

// Formik
import { Formik } from 'formik';
// PropTypes
// import PropTypes from 'prop-types';
// Yup
import * as Yup from 'yup';
import 'yup-phone';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

// Validation Schema
const schema = Yup.object().shape({
  name: Yup.string('Enter the letters!').required(
    'You forgot to enter a name!'
  ),
  number: Yup.string('Enter a numbers please!')
    .required('You forgot to enter a number!')
    .phone('UA', true, 'Enter UA number format!'),
});

// Form
const ContactsForm = () => {
  const dispatch = useDispatch();
  const constacts = useSelector(selectContacts);
  // console.log(constacts);
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const contactData = { name, number };
    if (constacts.some(item => item.name === name)) {
      alert('You have the same contact already  ');
      resetForm();
      return;
    }
    dispatch(addContact(contactData));

    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Container autoComplete="on">
        <div>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              placeholder="Enter name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
          </Label>

          <ErrorNotify name="name" component="div" />
        </div>
        <div>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              id="phone"
              placeholder="Enter number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
          </Label>

          <ErrorNotify name="number" component="div" />
        </div>
        <CreateContactBtn type="submit">Add</CreateContactBtn>
      </Container>
    </Formik>
  );
};

export default ContactsForm;
