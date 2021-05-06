// import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => (
  <header className={style.Searchbar}>
    <form className={style.SearchForm}>
      <button type="submit" className={style.SearchFormButton}>
        <span className={style.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={style.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

// FeedbackOption.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

export default Searchbar;
