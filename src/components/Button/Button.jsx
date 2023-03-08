import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';
export const Button = ({
  variant = 'default',
  type = 'button',
  title,
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      variant={variant}
      type={type}
      onClick={onClick}
    >
      {title} {children}
    </StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
