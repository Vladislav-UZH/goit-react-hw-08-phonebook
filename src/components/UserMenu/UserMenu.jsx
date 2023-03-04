import { Button } from 'components/Button/Button';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Nav, Username, Greetings } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <Nav>
      <Greetings>
        <p>
          Hello👋, <Username>{user.name}</Username>
        </p>
      </Greetings>
      <Button
        variant="default"
        type="button"
        title="Logout"
        onClick={handleClick}
      />
    </Nav>
  );
};
