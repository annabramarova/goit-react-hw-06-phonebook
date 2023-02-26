import * as Yup from 'yup';

import Notiflix from 'notiflix';

import { Formik} from "formik";
import { Input, Button, FormStyled, Label, Error} from './ContactForm.styled'
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';


const schema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(20, 'Too Long!')
     .required('Name is required field'),
   number: Yup.number()
  .typeError("That doesn't look like a phone number")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .min(8)
  .required('A phone number is required'),
 });

const INITIAL_VALUES = {
    name: '',
    number: '',
}
function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    function handleSubmit(contact, { resetForm }){
        if (contacts.findIndex(({ name }) => name.toLowerCase() === contact.name.toLowerCase()) !== -1) {
            Notiflix.Notify.warning(`${contact.name} is already in contacts.`);
            return;
        }
            
        dispatch(addContact(contact));
        resetForm();
    }
    
        return (
            <Formik initialValues={INITIAL_VALUES} validationSchema={schema} onSubmit={handleSubmit}>
                <FormStyled autoComplete="off">
                    <Label htmlFor="name">Name
                        <Input type="text"
                            name="name"
                            required
                            placeholder="Enter name..."
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        ></Input>
                            <Error name="name" component="p"/>
                    </Label>
                    <Label htmlFor="number">Number
                        <Input type='tel'
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            placeholder="Enter phone number..."
                            >
                        </Input>
                        <Error name="number" component="p"/>
                    </Label>
                    <Button type='submit'>Add contact</Button>
                </FormStyled>
            </Formik>
        );
    }


export default ContactForm;