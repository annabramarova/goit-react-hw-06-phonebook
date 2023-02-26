import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getFilteredContacts } from 'redux/selectors';

import {
  List,
  ListItem,
  ListText,
  Button,
} from './ContactList.styled';


const ContactList = () => {
  const filtered = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));
  return (
    <List>
      {filtered.map(({ id, name, number }) => (
        <ListItem key={id}>
          <ListText>{name}:  {number} </ListText>
          <Button type="button"
            onClick={()=>onDeleteContact(id)}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};
