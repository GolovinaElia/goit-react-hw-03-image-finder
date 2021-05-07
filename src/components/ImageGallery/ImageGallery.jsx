// import PropTypes from 'prop-types';
import style from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ hits }) => (
  <ul className={style.ImageGallery}>
    {hits.map(({ id, webformatURL, user }) => (
      <li key={id} className={style.ImageGalleryItem}>
        <ImageGalleryItem src={webformatURL} alt={user} />
      </li>
    ))}
  </ul>
);

// FeedbackOption.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

export default ImageGallery;
