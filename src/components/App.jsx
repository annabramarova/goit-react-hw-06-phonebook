
import { Container, Title, ContactsList} from "./App.styled";
import ContactForm from 'components/ContactForm'
import ContactList from 'components/ContactList';
import Filter from "components/Filter";


export default function App() {
    return (      
      <Container >
        <Title>Phonebook</Title>
        <ContactForm />
        <ContactsList>Contacts</ContactsList>
        <Filter  />
        <ContactList  />
      </Container>
    );
}
