import { toast } from 'react-hot-toast';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Grid, TextField, Paper, Box, Typography } from '@mui/material';

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
    <Grid container sx={{ justifyContent: 'center' }}>
      <Paper>
        <Box p={5}>
          <Typography variant="h4">Login</Typography>
          <Formik initialValues={initualValues} onSubmit={handleSubmit}>
            {props => {
              return (
                <Form>
                  <Field
                    as={TextField}
                    label="Username"
                    helperText={<ErrorMessage name="name" />}
                    margin="dense"
                    fullWidth
                    name="name"
                    type="text"
                    error={props.errors.email && props.touched.email}
                  />
                  <Field
                    as={TextField}
                    label="Email"
                    helperText={<ErrorMessage name="email" />}
                    margin="dense"
                    fullWidth
                    name="email"
                    type="email"
                    error={props.errors.email && props.touched.email}
                  />

                  <Field
                    as={TextField}
                    label="Password"
                    helperText={<ErrorMessage name="password" />}
                    margin="dense"
                    fullWidth
                    name="password"
                    type="password"
                    error={props.errors.password && props.touched.password}
                  />

                  <Button variant="default" type="submit" title="Login" />
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Paper>
    </Grid>
  );
};
