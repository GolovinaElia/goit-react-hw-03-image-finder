// import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, user }) => (
  <img src={webformatURL} alt={user} className={style.ImageGalleryItemImage} />
);

// FeedbackOption.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

export default ImageGalleryItem;
