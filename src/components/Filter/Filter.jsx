import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactsFilterSlice';
import { selectFilter } from 'redux/selectors';
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
