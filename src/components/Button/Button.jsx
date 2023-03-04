import { StyledButton } from './Button.styled';

export const Button = ({
  variant = 'default',
  type = 'button',
  title,
  children,
}) => {
  return (
    <StyledButton variant={variant} type={type}>
      {title} {children}
    </StyledButton>
  );
};
