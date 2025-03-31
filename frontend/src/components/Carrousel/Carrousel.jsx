import './Carrousel.scss';
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Chevron from '../../components/Chevron/Chevron';

export default function Carrousel({ pictures }) {
    const [ imgindex, setImgIndex ] = useState(0);
    const handleNext = () => {
        setImgIndex((imgindex + 1) % pictures.length);
    }
    const handlePrev = () => {
        setImgIndex((imgindex - 1 + pictures.length) % pictures.length);
    }

    const isSingleImage = pictures.length === 1;
    if (isSingleImage) {
        return (
            <div className="carrousel">
                <img className="carrousel__img carrousel__img--active" src={pictures[0]} alt="" />
            </div>
        );
    }
 
    return (
        <div className="carrousel">
            {pictures.map((picture, index) => (
                <img key={index} className={`carrousel__img ${index === imgindex ? 'carrousel__img--active' : ''}`} src={picture} alt="" />
            ))}
            <button className="carrousel__btn carrousel__btn--prev" onClick={handlePrev} aria-label="Image précédente">
                <Chevron direction="left" />
            </button>
            <button className="carrousel__btn carrousel__btn--next" onClick={handleNext} aria-label="Image suivante">
                <Chevron direction="right" />
            </button>
            <p className="carrousel__count">{imgindex + 1}/{pictures.length}</p>
        </div>
    )
}

Carrousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}