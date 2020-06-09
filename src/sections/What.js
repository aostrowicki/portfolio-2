import React, { useContext, useEffect } from 'react'
import Feature from '../components/Feature'
import illustration from '../assets/illustration.svg'
import des from '../assets/des.svg'
import dev from '../assets/dev.svg'
import { useMediaQuery } from 'react-responsive'
import { NavContext } from '../context'
import { useInView } from 'react-intersection-observer'

export default function What() {

    const smallCircle = useMediaQuery({ maxWidth: 920 })

    const { active, setActive } = useContext(NavContext);

    const [ref, inView, entry] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        inView ? setActive('what') : '';
    }, [inView]);

    return (
        <section id="what" ref={ref}>
            <div className="container">
                <div className="circle">
                    <svg viewBox="0 0 1500 1500">
                        {!smallCircle && <circle cx="0" cy="750" r="750" fill="none" stroke="#232323" strokeWidth="2px" />}
                        {smallCircle && <circle cx="-555" cy="1100" r="750" fill="none" stroke="#232323" strokeWidth="3.5px"></circle>}
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
