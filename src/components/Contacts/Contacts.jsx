import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <h2 className={css.contact__title}>Contacts</h2>
      <div className={css.contacts__container}>
        {contacts.length !== 0 ? (
          <ul className={css.contacts__list}>
            {contacts.map(({ name, id, number }) => (
              <li key={id} className={css.contact__item}>
                <p>{name}:</p>
                <span className={css.contact__number}>{number}</span>
                <button
                  type="button"
                  className={css.contact__delete}
                  onClick={() => onDelete(id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className={css.no__contacts}>CONTACTS NOT FOUND</p>
        )}
      </div>
    </>
  );
};

Contacts.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
