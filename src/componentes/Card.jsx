import React from 'react'

function Card ({ title, description, image, color, addHoverAnimation, removeHoverAnimation }) {
    return (
        <article className={`card card--${color}`} onMouseMove={addHoverAnimation} onMouseLeave={removeHoverAnimation}>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>

            <figure className="card__figure">
                <img src={image} alt=" " aria-hidden="true" />
            </figure>
        </article>
    )
}

export default Card