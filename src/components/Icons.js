import React from 'react'
import Website from './Website'
import frogame from '../assets/websites/frogger.jpg'

export default function Icons() {
    return (
        <div className="websites-grid">
            <Website href="https://github.com/aostrowicki/frogame" githref="https://github.com/aostrowicki/frogame" img={frogame} title="Frogame" work={"Work in progress 🚧 Frogger game clone, created using Canvas and modern vanilla JavaScript."} tools={["JavaScript (ES6+)", "Canvas"]} />
            <div></div>
        </div>
    )
}
