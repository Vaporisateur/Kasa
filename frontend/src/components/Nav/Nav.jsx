import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Nav({ links }) {
    if (!links || Object.keys(links).length === 0) {
        return null
    }

    return (
        <nav aria-label="Menu principal">
            <ul className="nav">
                {Object.values(links).map((link, index) => (
                    <li className="nav__item" key={index}>
                        <NavLink
                            className="nav__link"
                            to={link.to}
                            aria-label={link.ariaLabel}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

// PropTypes definition

Nav.propTypes = {
    links: PropTypes.objectOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            ariaLabel: PropTypes.string.isRequired,
        })
    ),
}