import { StyledLink, Nav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Nav>
      <StyledLink to="/reg">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </Nav>
  );
};
