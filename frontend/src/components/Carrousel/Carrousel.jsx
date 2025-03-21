import './Carrousel.scss';
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Chevron from '../../components/Chevron/Chevron';

export default function Carrousel({ pictures }) {
    const [ ImgIndex, setImgIndex ] = useState(0);
    const handleNext = () => {
        setImgIndex((ImgIndex + 1) % pictures.length);
    }
    const handlePrev = () => {
        setImgIndex((ImgIndex - 1 + pictures.length) % pictures.length);
    }

    return (
        <div className="carrousel">
            {pictures.map((picture, index) => (
                <img key={index} className={`carrousel__img ${index === ImgIndex ? 'carrousel__img--active' : ''}`} src={picture} alt="" />
            ))}
            <button className="carrousel__btn carrousel__btn--prev" onClick={handlePrev} aria-label="Image précédente">
                <Chevron direction="left" />
            </button>
            <button className="carrousel__btn carrousel__btn--next" onClick={handleNext} aria-label="Image suivante">
                <Chevron direction="right" />
            </button>
            <p className="carrousel__count">{ImgIndex}/{pictures.length - 1}</p>
        </div>
    )
}

Carrousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}