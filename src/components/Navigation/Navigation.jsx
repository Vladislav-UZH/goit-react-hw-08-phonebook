import { StyledLink } from 'components/AuthNav/AuthNav.styled';
import { useAuth } from 'hooks';
import { Nav } from './Navigation.styled';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </Nav>
  );
};
