import React from 'react'
import Feature from '../components/Feature'

export default function What() {
    return (
        <section id="what">
            <div className="circle" />
            <div className="container">
                <div className="left">
                    <h1 className="header">What I do...</h1>
                </div>
                <div className="right">
                    <Feature title="Web Design" list={['Website Design', 'Landing Pages', 'Wireframing', 'Prototyping']} />
                    <Feature title="Web Development" list={['HTML/CSS', 'JavaScript', 'Animations', 'React.js']} />
                    <Feature title="Illustrations" list={['Icons', 'Logos', 'Illustrations']} />
                </div>
            </div>
        </section>
    )
}
