import React, { useState, useEffect } from 'react'
import Websites from '../components/Websites'
import Icons from '../components/Icons'
import Illustrations from '../components/Illustrations'

export default function Work() {

    const categories = ['Websites', 'Icons', 'Illustrations'];
    const [active, setActive] = useState(categories[0]);

    return (
        <section id="work">
            <h1 className="header">My work</h1>
            <div className="categories">
                {categories.map(item => {
                    return <span className={`link ${active === item ? 'active' : ''}`} onClick={() => setActive(item)}>{item}</span>
                })}
            </div>

            {active === 'Websites' && <Websites />}
            {active === 'Icons' && <Icons />}
            {active === 'Illustrations' && <Illustrations />}

        </section>
    )
}
