import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/reg">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};
