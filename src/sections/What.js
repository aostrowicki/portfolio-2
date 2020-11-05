import React, { useContext, useEffect, useRef } from 'react'
import Feature from '../components/Feature'
import tools from '../assets/tools.svg'
import des from '../assets/des.svg'
import dev from '../assets/dev.svg'
import { useMediaQuery } from 'react-responsive'
import { NavContext } from '../context'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'

export default function What() {

    const smallCircle = useMediaQuery({ maxWidth: 920 })
    const { active, setActive } = useContext(NavContext);
    const circleRef = useRef(null);
    const listRef = useRef(null);
    let images, description;

    const [ref, inView, entry] = useInView({
        threshold: 0.4,
    });

    useEffect(() => {
        gsap.set(circleRef.current, { clipPath: "inset(0 0 100% 0)" });

        images = [...listRef.current.children].map(element => {
            return element.children[0];
        });
        description = [...listRef.current.children].map(element => {
            return element.children[1];
        });

        gsap.set(description, { autoAlpha: 0, x: '-=20' });
        gsap.set(images, { clipPath: "inset(0 0 100% 0)" });
    }, []);

    useEffect(() => {
        inView ? setActive('what') : '';

        const tl = gsap.timeline();
        images = [...listRef.current.children].map(element => {
            return element.children[0];
        });
        description = [...listRef.current.children].map(element => {
            return element.children[1];
        });

        if (inView) {
            tl.to(circleRef.current, { duration: 2, clipPath: "inset(0% 0 -10% 0)", ease: 'power1.easeOut' })
                .to(images, { duration: 0.15, clipPath: "inset(0% 0 0% 0)", ease: 'power0.easeOut', stagger: 0.2 }, '-=1.7').to(description, { duration: 0.45, autoAlpha: 1, x: '0', ease: 'power1.easeOut', stagger: 0.2 }, '-=1.65');
        }
    }, [inView]);

    return (
        <section id="what" ref={ref}>
            <div className="container">
                <div className="circle" ref={circleRef}>
                    <svg viewBox="0 0 1500 1500">
                        {!smallCircle && <circle cx="0" cy="750" r="750" fill="none" stroke="#232323" strokeWidth="2px" />}
                        {smallCircle && <circle cx="-555" cy="1100" r="750" fill="none" stroke="#232323" strokeWidth="3.5px" />}
                    </svg>
                </div>

                <div className="left">
                    <h1 className="header">What I do...</h1>
                </div>

                <div className="right" ref={listRef}>
                    <Feature img={des} title="Web Design" list={['Website Design', 'Wireframing', 'Figma', 'Adobe Xd', 'Adobe Illustrator']} />
                    <Feature img={dev} title="Web Development" list={['HTML/CSS', 'JavaScript (ES6+)', 'React', 'Redux', 'Redux Thunk', 'Styled Components', 'AJAX/Fetch']} />
                    <Feature img={tools} title="Other Skills" list={['GSAP', 'Git', 'Webpack', 'NPM']} />
                </div>
            </div>
        </section >
    )
}
