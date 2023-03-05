import { lazy } from 'react';

// Components

// styles
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { useAuth } from 'hooks';
import SkeletonLoader from 'components/SkeletonLoader/SkeletonLoader';
// import { toast } from 'react-hot-toast';

//___APP___
const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  // render
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // console.log('isRefreshing?', isRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <SkeletonLoader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/reg"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
//{<div
//   style={{
//     padding: 20,
//     display: 'flex',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     alignItems: 'center',
//     color: '#DBD7D7',
//   }}
// >
//   <div
//     style={{
//       minWidth: 680,
//       borderRadius: 10,
//       padding: 30,
//       backgroundColor: '#32343B ',
//     }}
//   >
//     <div></div>
//     <h1>Phonebook</h1>
//     {isOpen || !!contacts.length ? (
//       <ContactsForm />
//     ) : (
//       <AddContactsBtn onClick={toggleContactBar}>
//         Add your contacts
//         <BsPencilFill size={40} />
//       </AddContactsBtn>
//     )}
//     <div>
//       <h2>Contacts</h2>
//       <Filter />
//     </div>
//     {!contacts.length ? (
//       <Notification message="No contacts with the entered name!" />
//     ) : (
//       <ContactsList />
//     )}
//   </div>
// </div> }
