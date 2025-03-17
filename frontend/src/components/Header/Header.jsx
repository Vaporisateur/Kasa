import PropTypes from 'prop-types';
import './Header.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav';
import links from '../../data/NavData.json';

export default function Header() {
    return (
        <header className="header">
            <NavLink
                className="header__logo"
                to="/"
                aria-label="Revenir à l'accueil"
            >
                <img src="/public/logo.svg" alt="Logo de l'application" />
            </NavLink>
            <Nav links={links} />
        </header>
    )
}

Header.propTypes = {
    links: PropTypes.objectOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            ariaLabel: PropTypes.string.isRequired,
        })
    ),
}