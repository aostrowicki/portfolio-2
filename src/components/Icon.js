import React from 'react'

export default function Icon({ title, img }) {
    return (
        <div className="icons-item" style={{ backgroundImage: `url(${img})` }}>
            <h4 className="title">{title}</h4>
        </div>
    )
}
