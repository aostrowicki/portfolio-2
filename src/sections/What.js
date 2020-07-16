import React, { useContext, useEffect, useRef } from 'react'
import Feature from '../components/Feature'
import illustration from '../assets/illustration.svg'
import des from '../assets/des.svg'
import dev from '../assets/dev.svg'
import { useMediaQuery } from 'react-responsive'
import { NavContext } from '../context'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap';

export default function What() {

    const smallCircle = useMediaQuery({ maxWidth: 920 })
    const { active, setActive } = useContext(NavContext);
    const circleRef = useRef(null);
    const listRef = useRef(null);
    let images;

    const [ref, inView, entry] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        inView ? setActive('what') : '';
    }, [inView]);

    useEffect(() => {
        gsap.set(circleRef.current, { clipPath: "inset(0 0 100% 0)" });

        images = [...listRef.current.children].map(element => {
            return element.children[0];
        });

        gsap.set(images, { clipPath: "inset(0 0 100% 0)" });
    }, []);

    useEffect(() => {
        images = [...listRef.current.children].map(element => {
            return element.children[0];
        });

        const tl = gsap.timeline();

        active === 'what' ?
            tl.to(circleRef.current, { duration: 2, clipPath: "inset(0% 0 -10% 0)", ease: 'power1.easeOut' })
                .to(images, { duration: 0.15, clipPath: "inset(0% 0 0% 0)", ease: 'power0.easeOut', stagger: 0.25 }, '-=1.7') :
            tl.to(circleRef.current, { duration: 1.5, clipPath: "inset(0% 0 100% 0)", ease: 'power1.easeIn' })
                .to(images, { duration: 0.1, clipPath: "inset(0% 0 100% 0)", ease: 'power0.easeIn', stagger: { each: 0.2, from: 'end' } }, '-=1.25');
    }, [active]);

    return (
        <section id="what" ref={ref}>
            <div className="container">
                <div className="circle" ref={circleRef}>
                    <svg viewBox="0 0 1500 1500">
                        {!smallCircle && <circle cx="0" cy="750" r="750" fill="none" stroke="#232323" strokeWidth="2px" />}
                        {smallCircle && <circle cx="-555" cy="1100" r="750" fill="none" stroke="#232323" strokeWidth="3.5px"></circle>}
                    </svg>
                </div>

                <div className="left">
                    <h1 className="header">What I do...</h1>
                </div>

                <div className="right" ref={listRef}>
                    <Feature img={des} title="Web Design" list={['Website Design', 'Landing Pages', 'Wireframing', 'Prototyping']} />
                    <Feature img={dev} title="Web Development" list={['HTML/CSS', 'JavaScript', 'Animations', 'React.js']} />
                    <Feature img={illustration} title="Illustrations" list={['Icons', 'Logos', 'Illustrations']} />
                </div>
            </div>
        </section >
    )
}
