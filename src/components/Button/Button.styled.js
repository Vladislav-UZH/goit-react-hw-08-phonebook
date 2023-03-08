import styled from '@emotion/styled';
const animationFunc = `cubic-bezier(.17,.67,.28,.85) 300ms`;
const defaultStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px; 

  border: none;
  border-radius: 10px;

  font-weight: 600;

  background-color: #e2580a;
  color: inherit;

  transition: background-color ${animationFunc}, outline ${animationFunc},
    color ${animationFunc};

  &:hover {
    outline: 1px solid #e2580a;
    background-color: transparent;
    color: #e2580a;
  }
  &:active{
    background-color:#e2580a ; 
    color: inherit;
  }
`;
const StyledButton = styled.button`
  ${({ variant }) => {
    switch (variant) {
      // SUBMIT
      case 'submit':
        return `
        ${defaultStyles}
        font-size: 22px;
        width: 150px;
        height: 50px;
        `;
      // DELETE
      case 'delete':
        return `
  ${defaultStyles}
  padding: 5px 20px;`;
      // EDIT
      case 'edit':
        return `
  ${defaultStyles}
  margin-left: auto;
  padding: 5px 20px;`;
      // DEFAULT
      case 'default':
        return `${defaultStyles}
        font-size: 16px;
        width: 100px;
        height: 40px;
        `;

      default:
        throw new Error('Unsupported variant');
    }
  }}
`;
const AddContactsBtn = styled.button`
  ${defaultStyles}
  /* paddings */
  padding: 12px;
  /* size */
  width: 160px;
  height: 60px;
  /* fonts */
  font-size: 20px;
`;

const DeleteButton = styled.button``;
const CreateContactBtn = styled.button``;

// const Icon = styled.svg``;
export { AddContactsBtn, DeleteButton, CreateContactBtn, StyledButton };
