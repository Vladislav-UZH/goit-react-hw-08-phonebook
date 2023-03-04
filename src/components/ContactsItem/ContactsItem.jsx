import { Item, Name, Number, Container } from './ContactsItem.styled';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';

const ContactsItem = ({ name, number, deleteContact }) => {
  return (
    <Item>
      <Container>
        <Name>{name}: </Name>
        <Number> {number}</Number>
      </Container>

      <Button
        variant="delete"
        title="Delete"
        type="button"
        onClick={deleteContact}
      />
    </Item>
  );
};

ContactsItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};
export default ContactsItem;
