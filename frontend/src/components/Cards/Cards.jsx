import './Cards.scss';
import PropTypes from 'prop-types';

export default function Card({ logement: { id, cover, title }}) {
  return (
    <article className='Card' id={`logement-${id}`}>
        <img src={cover} alt={title} className='Card__cover' />
        <h2 className='Card__title'>{title}</h2>
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