import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsFilterSlice';
import { selectFilter } from 'redux/contacts/selectors';
const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  return (
    <Input
      onChange={e => dispatch(filterContacts(e.target.value))}
      value={value}
      type="text"
      name="filter"
      placeholder="Enter a name to search"
    />
  );
};

export default Filter;
