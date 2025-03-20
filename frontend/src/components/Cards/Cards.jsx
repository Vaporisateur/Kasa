import './Cards.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Card({ logement: { id, cover, title }}) {
  return (
    <article className='Card' id={`logement-${id}`}>
        <Link to={`/logements/${id}`} className='Card__link'>
            <img src={cover} alt={title} className='Card__cover' />
            <h2 className='Card__title'>{title}</h2>
        </Link>
    </article>
  );
}

Card.propTypes = {
    logement: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        cover: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};