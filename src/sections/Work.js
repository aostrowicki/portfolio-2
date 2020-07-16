import React, { useState, useEffect, useContext } from 'react'
import Websites from '../components/Websites'
import Icons from '../components/Icons'
import Illustrations from '../components/Illustrations'
import { NavContext } from '../context'
import { useInView } from 'react-intersection-observer'

export default function Work() {

    const categories = ['Websites', 'Icons', 'Illustrations'];
    const [active1, setActive1] = useState(categories[0]);

    const { active, setActive } = useContext(NavContext);

    const [ref, inView, entry] = useInView({
        threshold: 0.6,
    });

    useEffect(() => {
        inView ? setActive('work') : '';
    }, [inView]);

    return (
        <section id="work" ref={ref}>
            <div className="container">
                <h1 className="header">My work</h1>
                <div className="categories">
                    {categories.map(item => (
                        <React.Fragment key={item}><span className={`link ${active1 === item ? 'active' : ''}`} onClick={() => setActive1(item)} key={item}>{item}</span>
                            <span className="loader"></span></React.Fragment >
                    ))}
                </div>

                {active1 === 'Websites' && <Websites />}
                {active1 === 'Icons' && <Icons />}
                {active1 === 'Illustrations' && <Illustrations />}
            </div>
        </section>
    )
}
