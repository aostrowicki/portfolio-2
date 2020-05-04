import React from 'react'

export default function Feature({ title, list, img }) {
    return (
        <div className="feature">
            <img src={img} className="img-circle">{img}</img>
            <h4 className="subheader">{title}</h4>
            <ul>
                {list && list.map(item => {
                    return <li className="paragraph">{item}</li>
                })}
            </ul>
        </div>
    )
}
