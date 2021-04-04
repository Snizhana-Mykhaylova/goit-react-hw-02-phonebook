const Contacts = ({ contacts }) => {
  return contacts.map(contact => <li key={contact.id}>{contact.name}</li>);
};

export default Contacts;
