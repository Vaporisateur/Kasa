import PropTypes from 'prop-types';
import Card from '../Cards/Cards';
import './CardContainer.scss';

export default function CardContainer({ logements }) {
  return (
    <div className="CardContainer">
        {logements.map((logement) => (
            <Card key={logement.id} logement={logement} />
        ))}
    </div>
  );
}

CardContainer.propTypes = {
  logements: PropTypes.arrayOf(PropTypes.object).isRequired
};