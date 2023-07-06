import React from 'react';
import css from './FormData.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState } from 'react';

export function FormData({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    resetInput();
  };

  const resetInput = () => {
    switch ({ name, number }) {
      case 'name':
        setName('');
        break;
      case 'number':
        setNumber('');
        break;
      default:
        return;
    }
  };

  const idName = nanoid();
  const idNumber = nanoid();

  return (
    <>
      <h2 className={css.phonebook__title}>PHONEBOOK</h2>
      <div className={css.main__form}>
        <form onSubmit={handleSubmit}>
          <div className={css.input__form}>
            <label className={css.form__label} htmlFor={idName}>
              Name
            </label>
            <input
              className={css.input__change}
              onChange={handleChange}
              type="text"
              name="name"
              id={idName}
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div className={css.input__form}>
            <label className={css.form__label} htmlFor={idNumber}>
              Number
            </label>
            <input
              className={css.input__change}
              onChange={handleChange}
              type="tel"
              name="number"
              id={idNumber}
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <div className={css.form__button}>
            <button className={css.submit__button} type="submit">
              Add contact
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

FormData.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
