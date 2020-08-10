import React, { useContext, useEffect } from 'react'
import Button from '../components/Button'
import arrow from '../assets/arrow-right.svg'
import hero from '../assets/hero.svg'
import { NavContext } from '../context'
import { useInView } from 'react-intersection-observer'

export default function Hero() {

    const { active, setActive } = useContext(NavContext);

    const [ref, inView, entry] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        inView ? setActive('home') : '';
    }, [inView]);

    return (
        <section id="hero" ref={ref}>
            <div className="container">
                <h4 className="subtitle"><span className="break"><span className="color">I'm Adam</span>,</span> Frontend Developer and UI Designer</h4>
                <h1 className="header">I will create you a modern website</h1>
                <Button target="#work" type="right">See my work <img src={arrow} /></Button>

                <div className="img">
                    <img src={hero} />
                </div>  
            </div>
        </section>
    )
}
