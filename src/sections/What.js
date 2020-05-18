import React from 'react'
import Feature from '../components/Feature'
import illustration from '../assets/illustration.svg'
import des from '../assets/des.svg'
import dev from '../assets/dev.svg'

export default function What() {
    return (
        <section id="what">

            <div className="container">

                <div className="circle">
                    <svg viewBox="0 0 1500 1500" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="0" cy="750" r="750" fill="none" stroke="#232323" strokeWidth="2px" />
                    </svg>
                </div>

                <div className="left">
                    <h1 className="header">What I do...</h1>
                </div>

                <div className="right">
                    <Feature img={des} title="Web Design" list={['Website Design', 'Landing Pages', 'Wireframing', 'Prototyping']} />
                    <Feature img={dev} title="Web Development" list={['HTML/CSS', 'JavaScript', 'Animations', 'React.js']} />
                    <Feature img={illustration} title="Illustrations" list={['Icons', 'Logos', 'Illustrations']} />
                </div>
            </div>
        </section >
    )
}
