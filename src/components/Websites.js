import React, { useEffect, useRef } from 'react'
import Website from './Website'
import outdo from '../assets/websites/outdo.png'
import barb from '../assets/websites/barb.png'
import portfolio from '../assets/websites/portfolio-2.png'
import pokecards from '../assets/websites/pokecards.png'

export default function Websites(active) {

    return (
        <div className="websites-grid">
            <Website href="https://sleepy-pasteur-120358.netlify.app" githref="https://github.com/aostrowicki/pokecards" img={pokecards} title="Pokecards" work={"Personal project created with public API to improve the skills to work with API's, state management libraries (Redux) and styled components in React."} tools={["React", "Redux", "Redux Thunk", "Styled Components", "PokeAPI"]} />
            <Website href="https://aostrowicki.com" githref="https://github.com/aostrowicki/portfolio-2" img={portfolio} title="Portfolio" work={"Personal portfolio website designed and developed by me. Created with React using React Hooks."} tools={["React", "GSAP", "Adobe Illustrator", "Adobe XD"]} />
            <Website href="https://outdo.org.in" img={outdo} title="OutDo" work={"My task was to create website from design provided by client, export all the given assets and optimize animations due to their slow performance and large file sizes."} tools={["HTML/CSS/JS", "Lottie/Bodymovin", "Adobe Illustrator", "Adobe After Effects"]} />
            <Website href="https://hungry-leavitt-3367f0.netlify.app" githref="https://github.com/aostrowicki/barber-shop" img={barb} title="Barber" work={"Simple personal project built with HTML, CSS and vanilla Javascript."} tools={["HTML/CSS/JS", "Figma", "Adobe Illustrator"]} />
        </div>
    )
}
