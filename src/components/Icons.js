import React from 'react'
import Icon from './Icon'
import i1 from '../assets/websites/icons1.png'
import i2 from '../assets/websites/icons2.png'
import i3 from '../assets/websites/icons3.png'

export default function Icons() {
    return (
        <div className="icons-grid">
            <Icon title="test" img={i3} />
            <Icon title="test" img={i2} />
            <Icon title="test" img={i1} />
            <Icon />
        </div>
    )
}
