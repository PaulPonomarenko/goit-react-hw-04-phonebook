import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
  return (
    <>
      <div className={css.filter}>
        <label htmlFor="filter" className={css.label__filter}>
          Find contact by name
        </label>
        <input
          className={css.filter__input}
          type="text"
          id="filter"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
