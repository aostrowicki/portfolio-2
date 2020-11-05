import React from 'react'

export default function Button({ type, target, children, download, newcart }) {
    return (
        <a href={target} download={download} target={`${newcart ? '_blank' : ''}`} className={`btn${(type === 'right') ? ' right' : ''} ${(type === 'down') ? ' down' : ''} ${(type === 'secondary') ? ' secondary' : ''}`}>
            {children}
        </a>
    )
}
