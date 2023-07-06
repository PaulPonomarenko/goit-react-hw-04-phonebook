import React from 'react';
import css from './FormData.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class FormData extends React.Component {
  state = { ...INITIAL_STATE };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetInput();
  };

  resetInput = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, number } = this.state;
    const idName = nanoid();
    const idNumber = nanoid();
    return (
      <>
        <h2 className={css.phonebook__title}>PHONEBOOK</h2>
        <div className={css.main__form}>
          <form onSubmit={this.handleSubmit}>
            <div className={css.input__form}>
              <label className={css.form__label} htmlFor={idName}>
                Name
              </label>
              <input
                className={css.input__change}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
}

FormData.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
