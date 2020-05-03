import React from 'react'
import Button from '../components/Button'
import arrow from '../assets/arrow-down.svg'
import about from '../assets/about.svg'

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <h1 className="header">About me</h1>
                <p className="paragraph">
                    I'm young and passionate Front-end Developer from Poland. I have Bachelor's degree in IT. I have experience with programming in many languages, but since graduating I focused on designing and coding websites. Bellow you can see some of my recent works.
                <span>Currently looking for a job as a Front-end Developer.</span>
                </p>
                <Button target="#" type="down">Get my CV <img src={arrow} /></Button>
                
                <div className="img">
                    <img src={about} />
                </div>
            </div>
        </section>
    )
}
