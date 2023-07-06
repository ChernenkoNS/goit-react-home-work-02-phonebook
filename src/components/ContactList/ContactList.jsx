import PropTypes from "prop-types";
import css from '../ContactList/ContactList.module.css'

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={css.contactsItem}>
          <p>
            {name}: {number}
          </p>
          <button onClick={() => onDeleteContact(id)}>Delet</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts:  PropTypes.array,
  onDeleteContact:PropTypes.func.isRequired
};
