import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';
import defaultImage from '../Image/default.png';

const ImageGalleryItem = ({ src, user }) => (
  <img src={src} alt={user} className={style.ImageGalleryItemImage} />
);

ImageGalleryItem.defaultProps = {
  webformatURL: defaultImage,
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
