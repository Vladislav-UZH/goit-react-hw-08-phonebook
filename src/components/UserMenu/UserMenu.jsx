import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>Hello, {user.name}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
