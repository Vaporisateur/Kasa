import React from 'react';
import PropTypes from 'prop-types';

export default function Chevron( { direction } ) {
    return (
        <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {direction === 'left' ? (
                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
            ) : (
                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
            )}
        </svg>
    )
}

Chevron.propTypes = {
    direction: PropTypes.string.isRequired,
}