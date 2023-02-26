export const getContacts = ({contacts}) => contacts;

export const getFilter = ({ filter }) => filter;

export const getFilteredContacts = ({ contacts, filter }) => {
    if (filter === '') {
        return contacts;
    }
    const normalizedFilterValue = filter.toLowerCase();
    return contacts.filter(({ name }) => {
        return name.toLowerCase().includes(normalizedFilterValue);
    });
}
