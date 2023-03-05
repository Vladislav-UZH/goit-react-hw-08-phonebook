import { toast } from 'react-hot-toast';
// import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Grid, TextField, Paper, Box, Typography, Button } from '@mui/material';
import * as yup from 'yup';
const validationSchema = yup.object({
  name: yup.string().max(12).required('You forgot to enter your name!'),
  email: yup.string().email().required('You forgot to enter your email!'),
  password: yup.string().min(8).required('You forgot to enter your password!'),
});

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
        <Box sx={{ width: 450 }} p={5}>
          <Typography variant="h4">Registration</Typography>
          <Formik
            validationSchema={validationSchema}
            initialValues={initualValues}
            onSubmit={handleSubmit}
          >
            {props => {
              return (
                <Form>
                  <Grid container direction="column">
                    <Field
                      as={TextField}
                      label="Username"
                      helperText={<ErrorMessage name="name" />}
                      margin="dense"
                      // fullWidth
                      name="name"
                      type="text"
                      error={props.errors.name && props.touched.name}
                    />
                    <Field
                      as={TextField}
                      label="Email"
                      helperText={<ErrorMessage name="email" />}
                      margin="dense"
                      // fullWidth
                      name="email"
                      type="email"
                      error={props.errors.email && props.touched.email}
                    />

                    <Field
                      as={TextField}
                      label="Password"
                      helperText={<ErrorMessage name="password" />}
                      margin="dense"
                      // fullWidth
                      name="password"
                      type="password"
                      error={props.errors.password && props.touched.password}
                    />

                    {/* <Button variant="default" type="submit" title="Login" /> */}
                  </Grid>
                  <Grid container marginTop={1} justifyContent="center">
                    <Button size="large" variant="contained" type="submit">
                      Create
                    </Button>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Paper>
    </Grid>
  );
};
