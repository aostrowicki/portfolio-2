import React, { useEffect, useContext } from 'react'
import Button from '../components/Button'
import arrow from '../assets/arrow-down.svg'
import about from '../assets/about.svg'
import { NavContext } from '../context'
import { useInView } from 'react-intersection-observer'

export default function About() {

    const { active, setActive } = useContext(NavContext);

    const [ref, inView, entry] = useInView({
        threshold: 0.7,
    });

    useEffect(() => {
        inView ? setActive('about') : '';
    }, [inView]);

    return (
        <section id="about" ref={ref}>
            <div className="container">
                <div className="left">
                    <h1 className="header">About me</h1>
                    <p className="paragraph">
                        I'm young and passionate Front-end Developer from Poland. I have Bachelor's degree in IT. I have experience with programming in many languages, but since graduating I focused on coding and designing websites. Bellow you can see some of my recent works.
                <span>Currently looking for a job as a Front-end Developer.</span>
                    </p>
                    <Button target="#" type="down">Get my CV <img src={arrow} /></Button>
                </div>

                <div className="right">
                    <img src={about} />
                </div>

            </div>
        </section>
    )
}
