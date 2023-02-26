import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { FilterName, Label} from './Filter.styled'

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <Fragment>
    <Label>Find contact by Name </Label>
    <FilterName
      type="text"
      name="filter"
      placeholder="Find a person"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
    />
    </Fragment>
  );
};

export default Filter;