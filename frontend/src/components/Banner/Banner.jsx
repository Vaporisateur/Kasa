import PropTypes from 'prop-types';
import './Banner.scss';

export default function Banner({ title = '', image = ''}) {
    return (
        <div className="banner" style={{ '--background-image': `url(${image})` }}>
            {title && <h1 className="banner__title">{title}</h1>}
        </div>
    ) 
}

Banner.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string.isRequired,
}