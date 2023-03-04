import { toast } from 'react-hot-toast';
import { Button } from 'components/Button/Button';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const initualValues = {
    email: '',
    password: '',
  };
  const handleSubmit = ({ email, password }, { resetForm }) => {
    if (!email || !password) {
      return toast.error('The fields must be filled in');
    }
    dispatch(login({ email, password }));
    resetForm();
  };
  return (
    <Formik initialValues={initualValues} onSubmit={handleSubmit}>
      <Form>
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
