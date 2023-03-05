// import { Button } from 'components/Button/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { Grid, TextField, Paper, Box, Typography, Button } from '@mui/material';
import * as yup from 'yup';
const validationSchema = yup.object({
  email: yup.string().email().required('You forgot to enter your email!'),
  password: yup.string().min(8).required('You forgot to enter your password!'),
});
export const LoginForm = () => {
  const dispatch = useDispatch();
  const initualValues = {
    email: '',
    password: '',
  };
  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password }));
    resetForm();
  };
  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      <Paper>
        <Box sx={{ width: 450 }} p={5}>
          <Typography variant="h4">Login</Typography>
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
                      Login
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

//   <Grid container sx={{ justifyContent: 'center' }}>
//     <Paper>
//       <Box p={5}>
//         <Typography variant="h4">Login</Typography>
//         <Formik initialValues={initualValues} onSubmit={handleSubmit}>
//           {props => {
//             return (
//               <Form>
//                 <Field
//                   as={TextField}
//                   label="Email"
//                   helperText={<ErrorMessage name="email" />}
//                   margin="dense"
//                   fullWidth
//                   name="email"
//                   type="email"
//                   error={props.errors.email && props.touched.email}
//                 />

//                 <Field
//                   as={TextField}
//                   label="Password"
//                   helperText={<ErrorMessage name="password" />}
//                   margin="dense"
//                   fullWidth
//                   name="password"
//                   type="password"
//                   error={props.errors.password && props.touched.password}
//                 />

//                 <Button variant="default" type="submit" title="Login" />
//               </Form>
//             );
//           }}
//         </Formik>
//       </Box>
//     </Paper>
//   </Grid>;
// }
//
