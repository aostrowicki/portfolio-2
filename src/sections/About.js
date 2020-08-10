import React, { useEffect, useContext } from 'react'
import Button from '../components/Button'
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
                    <Button target="#" type="down">Get my CV
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="18"><defs>
                            <style>{`.cls-1,.cls-2,.cls-3{fill:none;}.cls-2,.cls-3{stroke:#fff;stroke-linecap:round;stroke-width:1.5px;}.cls-2{stroke - linejoin:round;}.cls-3{stroke - miterlimit:10;}`}</style>
                        </defs>
                            <g id="arrow-down">
                                <rect class="cls-1" width="16" height="16" />
                                <g id="arrow">
                                    <line class="cls-2" x1="8" y1="9" x2="8" y2="1" />
                                    <polyline class="cls-2" points="12 5 8 9 4 5" />
                                </g>
                                <line class="cls-3" x1="3" y1="15" x2="13" y2="15" />
                            </g>
                        </svg>
                    </Button>
                </div>

                <div className="right">
                    {<img src={about} />}
                </div>

            </div>
        </section>
    )
}
