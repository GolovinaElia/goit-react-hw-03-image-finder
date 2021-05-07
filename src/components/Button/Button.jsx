// import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({ fetchHits }) => (
  <button type="button" className={style.Button}>
    Load more
  </button>
);

// FeedbackOption.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

export default Button;
