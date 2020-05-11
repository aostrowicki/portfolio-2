import React from 'react'

export default function Icon({ title, img }) {
    return (
        <div className="icons-item">
            <h4 className="title">{title}</h4>
            <img src={img} alt="" />
        </div>
    )
}
