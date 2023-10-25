import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <p className={css.descrList}>{contact.name}</p>
          <p className={css.descrList}>{contact.number}</p>
          <button
            type="button"
            className={css.btnDel}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
