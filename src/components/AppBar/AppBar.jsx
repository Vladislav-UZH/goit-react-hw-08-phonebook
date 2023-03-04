import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Container, Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Container>
        <h1>Phonebook Toolkit</h1>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Header>
  );
};
