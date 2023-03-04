export const Button = ({ type = 'button', title, children }) => {
  return (
    <button type={type}>
      {title} {children}
    </button>
  );
};
