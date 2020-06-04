import React from 'react'

export default function Website({ title, description, img }) {

    return (
        <div className="websites-item" style={{ backgroundImage: `url(${img})` }}>
            <span className="text-wrapper">
                <h4 className="title">{title}</h4>
                <div className="description">{description}</div>
            </span>
        </div>
    )
}
