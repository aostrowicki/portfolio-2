import React, { useContext, useEffect, useRef } from 'react'
import Button from '../components/Button'
import arrow from '../assets/arrow-right.svg'
import hero from '../assets/hero.svg'
import heroSmall from '../assets/hero-small.svg'
import { NavContext } from '../context'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'

export default function Hero() {

    const { active, setActive } = useContext(NavContext);
    const container = useRef(null);

    const [ref, inView, entry] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        inView ? setActive('home') : '';
    }, [inView]);

    useEffect(() => {
        gsap.set(container.current, { y: '-=10', autoAlpha: 0 });

        const tl = gsap.timeline({ defaults: { ease: 'power1.inOut' } });

        tl.to(container.current, { y: '+=20', autoAlpha: 1, duration: 0.5 }, '+=0.7');
    }, []);

    return (
        <section id="hero" ref={ref}>
            <div className="container" ref={container}>
                <h4 className="subtitle"><span className="break"><span className="color">I'm Adam</span>,</span> Frontend Developer and UI Designer</h4>
                <h1 className="header">I will create a modern website for you</h1>
                <Button target="#work" type="right">See my work <img src={arrow} alt="arrow icon" /></Button>

                <div className="img">
                    {window.innerWidth > 440 ? <img src={hero} alt="hero" /> : <img src={heroSmall} alt="hero" />}
                </div>
            </div>
        </section>
    )
}
