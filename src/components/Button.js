import React from 'react'

export default function Button({ type, target, children, download }) {
    return (
        <a href={target} download={download} className={`btn${(type === 'right') ? ' right' : ''} ${(type === 'down') ? ' down' : ''}`}>
            {children}
        </a>
    )
}
