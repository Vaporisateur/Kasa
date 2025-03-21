import './Host.scss';
import PropTypes from 'prop-types';

export default function Host({ host }) {
    return (
        <div className="host">
            <img src={host.picture} alt="Photo de l'hôte" className="host__picture" />
            <h2 className="host__name">{host.name}</h2>
        </div>
    )
}

Host.propTypes = {
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }).isRequired,
}