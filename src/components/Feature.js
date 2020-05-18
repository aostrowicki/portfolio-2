import React from 'react'

export default function Feature({ title, list, img }) {
    return (
        <div className="feature">
            <div className="img-circle">
                <img src={img} />
            </div>
            <div className="text-container">
                <h4 className="subheader">{title}</h4>
                <ul>
                    {list && list.map(item => {
                        return <li key={item} className="paragraph">{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}
