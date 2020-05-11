import React from 'react'

export default function Button({ type, target, children, square }) {
    return (
        <a href={target} className={`btn${(type === 'right') ? ' right' : ''} ${(type === 'down') ? ' down' : ''} ${(square) ? ' square' : ''}`}>
            {children}
        </a>
    )
}
