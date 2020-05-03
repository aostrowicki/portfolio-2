import React from 'react'

export default function Button({ type, target, children }) {
    return (
        <a href={target} className={`btn${(type === 'right') ? ' right' : ''}${(type === 'down') ? ' down' : ''}`}>
            {children}
        </a>
    )
}
