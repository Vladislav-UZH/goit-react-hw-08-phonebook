import { toast } from 'react-hot-toast';
import { Button } from 'components/Button/Button';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const initualValues = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    if (!name || !email || !password) {
      return toast.error('The fields must be filled in');
    }
    dispatch(register({ name, email, password }));
    // resetForm();
  };
  return (
    <Formik initialValues={initualValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          Username
          <Field name="name" type="text" />
        </label>
        <label>
          Email
          <Field name="email" type="email" />
        </label>
        <label>
          Password
          <Field name="password" type="password" />
        </label>
        <Button type="submit" title="Login" />
      </Form>
    </Formik>
  );
};
