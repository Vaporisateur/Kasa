import './Tags.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default function Tags({ tags }) {
    return (
        <ul className="tagslist">
            {tags.map((tag, index) => (
                <li key={index} className="tagslist__tag">{tag}</li>
            ))}
        </ul>
    )
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}