// import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ onSubmit }) => (
  <li className={style.ImageGalleryItem}>
    <img src="" alt="" className={style.ImageGalleryItemImage} />
  </li>
);

// FeedbackOption.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

export default ImageGalleryItem;
