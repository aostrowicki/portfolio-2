import React from 'react'
import Illustration from './Illustration'
import i1 from '../assets/websites/illu1.png'
import i2 from '../assets/websites/illu2.png'

export default function Illustrations() {
    return (
        <div className="illustrations-grid">
            <Illustration title="test" img={i1} />
            <Illustration title="test" img={i2} />
            <Illustration title="test" />
        </div>
    )
}
